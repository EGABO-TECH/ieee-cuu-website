/**
 * lib/calls.ts
 * ─────────────────────────────────────────────────────────────────
 * Open calls (volunteers, applications) loaded from content/calls.json.
 * Status is date-driven via callStatus in lib/status.ts.
 * ─────────────────────────────────────────────────────────────────
 */

import callsData from "@/content/calls.json";

export type CallItem = {
  slug: string;
  title: string;
  summary: string;
  slots?: number;
  opens?: string;
  closes: string;
  formUrl: string;
  flyer?: string;
  forEvent?: string;
  audience?: string;
  href: string;
};

export const calls = callsData as CallItem[];

export function getCall(slug: string): CallItem | undefined {
  return calls.find((c) => c.slug === slug);
}

export const VOLUNTEER_CALL = getCall("volunteer-2026")!;
