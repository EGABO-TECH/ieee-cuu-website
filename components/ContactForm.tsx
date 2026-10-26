"use client";

import { useState } from "react";
import Link from "next/link";

const TOPICS = ["Membership", "Events", "Volunteering", "Sponsorship or partnership", "Media", "Other"];

const inputClass =
  "mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0D6E6E] focus:outline-none focus:ring-2 focus:ring-[#0D6E6E]/20";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setState("sending");
    const form = new FormData(e.currentTarget);
    const body = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.issues?.[0]?.message ?? data.error ?? "Something went wrong. Please try again.");
        setState("idle");
        return;
      }
      setState("sent");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setState("idle");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-[#9dbdc1] bg-white p-7">
        <h2 className="font-serif text-xl font-bold text-slate-900">Message sent</h2>
        <p className="mt-2 text-sm text-slate-600">Thank you. We aim to reply within three working days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-slate-100 bg-white p-7" noValidate>
      <h2 className="font-serif text-xl font-bold text-slate-900">Send a message</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Name
          <input name="name" required minLength={2} maxLength={100} autoComplete="name" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input name="email" type="email" required autoComplete="email" className={inputClass} />
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        Topic
        <select name="topic" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Choose a topic
          </option>
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Message
        <textarea name="message" required minLength={10} maxLength={2000} rows={5} className={inputClass} />
      </label>

      {/* Honeypot: hidden from people, filled by bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this empty
          <input name="honeypot" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="text-xs leading-relaxed text-slate-500">
        We use your name and email only to reply to you, and keep messages for up to 12 months after we reply. See the{" "}
        <Link href="/privacy" className="text-[#0D6E6E] underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex items-center rounded-full bg-[#0D6E6E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1A9090] disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
