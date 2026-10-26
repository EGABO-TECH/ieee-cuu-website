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

/** Returns true only if the file write succeeded. */
function saveData(): boolean {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(memoryStore, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.warn("Could not persist to content/submissions.json (operating in-memory):", err);
    return false;
  }
}

/**
 * Forward a record to SUBMISSION_WEBHOOK_URL (e.g. a Google Apps Script
 * bound to a Sheet). Returns true only on a 2xx response.
 */
async function forwardToWebhook(type: "join" | "contact", record: JoinRecord | ContactRecord): Promise<boolean> {
  if (!process.env.SUBMISSION_WEBHOOK_URL) return false;
  try {
    const res = await fetch(process.env.SUBMISSION_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, record }),
    });
    if (!res.ok) console.error(`Webhook rejected ${type} record: HTTP ${res.status}`);
    return res.ok;
  } catch (e) {
    console.error(`Failed to forward ${type} record to external webhook:`, e);
    return false;
  }
}

/**
 * persisted is false when neither the file nor the webhook stored the record.
 * On Vercel the filesystem is read-only, so the webhook is the only durable store.
 */
export type SaveResult<T> = { record: T; persisted: boolean };

// Initial load
loadData();

export async function saveJoinSubmission(
  data: Omit<JoinRecord, "id" | "createdAt" | "consentAt">
): Promise<SaveResult<JoinRecord>> {
  loadData();
  const now = new Date().toISOString();
  const record: JoinRecord = {
    ...data,
    id: `join_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: now,
    consentAt: now,
  };

  memoryStore.joins.push(record);
  const savedToFile = saveData();

  // If Supabase or Google Sheet webhook is configured via env vars, post here:
  const forwarded = await forwardToWebhook("join", record);

  return { record, persisted: savedToFile || forwarded };
}

export async function saveContactSubmission(
  data: Omit<ContactRecord, "id" | "createdAt">
): Promise<SaveResult<ContactRecord>> {
  loadData();
  const record: ContactRecord = {
    ...data,
    id: `contact_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
  };

  memoryStore.contacts.push(record);
  const savedToFile = saveData();

  const forwarded = await forwardToWebhook("contact", record);

  return { record, persisted: savedToFile || forwarded };
}

export function getAllJoins(): JoinRecord[] {
  loadData();
  return memoryStore.joins;
}

export function getAllContacts(): ContactRecord[] {
  loadData();
  return memoryStore.contacts;
}
