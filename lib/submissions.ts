import fs from "fs";
import path from "path";

export interface JoinRecord {
  id: string;
  fullName: string;
  email: string;
  studentId?: string;
  program: string;
  yearOfStudy: string;
  interests: string[];
  contactPreferences: string[];
  createdAt: string;
  source: string;
  consentAt: string;
}

export interface ContactRecord {
  id: string;
  name: string;
  email: string;
  topic: string;
  message: string;
  createdAt: string;
}

const DATA_FILE = path.join(process.cwd(), "content", "submissions.json");

// In-memory fallback if filesystem is read-only (e.g. serverless edge)
let memoryStore: {
  joins: JoinRecord[];
  contacts: ContactRecord[];
} = {
  joins: [],
  contacts: [],
};

// Simple rate limiter tracking IP / timestamp
const rateLimitMap = new Map<string, number[]>();

export function checkRateLimit(identifier: string, maxRequests = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(identifier) || [];
  const validTimestamps = timestamps.filter((t) => now - t < windowMs);

  if (validTimestamps.length >= maxRequests) {
    return false; // Rate limit exceeded
  }

  validTimestamps.push(now);
  rateLimitMap.set(identifier, validTimestamps);
  return true;
}

function loadData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      memoryStore = {
        joins: parsed.joins || [],
        contacts: parsed.contacts || [],
      };
    }
  } catch (err) {
    // Fallback to memoryStore
  }
}

function saveData() {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(memoryStore, null, 2), "utf-8");
  } catch (err) {
    console.warn("Could not persist to content/submissions.json (operating in-memory):", err);
  }
}

// Initial load
loadData();

export async function saveJoinSubmission(data: Omit<JoinRecord, "id" | "createdAt" | "consentAt">): Promise<JoinRecord> {
  loadData();
  const now = new Date().toISOString();
  const record: JoinRecord = {
    ...data,
    id: `join_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: now,
    consentAt: now,
  };

  memoryStore.joins.push(record);
  saveData();

  // If Supabase or Google Sheet webhook is configured via env vars, post here:
  if (process.env.SUBMISSION_WEBHOOK_URL) {
    try {
      await fetch(process.env.SUBMISSION_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "join", record }),
      });
    } catch (e) {
      console.error("Failed to forward join record to external webhook:", e);
    }
  }

  return record;
}

export async function saveContactSubmission(data: Omit<ContactRecord, "id" | "createdAt">): Promise<ContactRecord> {
  loadData();
  const record: ContactRecord = {
    ...data,
    id: `contact_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
  };

  memoryStore.contacts.push(record);
  saveData();

  if (process.env.SUBMISSION_WEBHOOK_URL) {
    try {
      await fetch(process.env.SUBMISSION_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", record }),
      });
    } catch (e) {
      console.error("Failed to forward contact record to external webhook:", e);
    }
  }

  return record;
}

export function getAllJoins(): JoinRecord[] {
  loadData();
  return memoryStore.joins;
}

export function getAllContacts(): ContactRecord[] {
  loadData();
  return memoryStore.contacts;
}
