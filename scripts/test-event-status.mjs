/**
 * scripts/test-event-status.mjs
 * 
 * Verifies date-driven event status logic and EAT boundary conditions.
 */
import assert from "node:assert";

// Implementation of computeStatus from lib/events.ts
function computeStatus(now, event) {
  const start = new Date(event.startsAt).getTime();
  const end = new Date(event.endsAt).getTime();
  const nowMs = now.getTime();

  const regOpens = event.registration?.opensAt
    ? new Date(event.registration.opensAt).getTime()
    : null;
  const regCloses = event.registration?.closesAt
    ? new Date(event.registration.closesAt).getTime()
    : null;

  if (nowMs >= end) return "ended";
  if (nowMs >= start) return "live";
  if (regCloses !== null && nowMs >= regCloses) return "registration-closed";
  if (regOpens !== null && nowMs >= regOpens) return "registration-open";
  return "upcoming";
}

console.log("Running Event Status Logic Verification...\n");

// Test 1: IEEE Day 2026 on 22 October 2026 (today)
const ieeeDayEvent = {
  startsAt: "2026-10-06T12:00:00+03:00",
  endsAt: "2026-10-06T18:00:00+03:00",
  registration: {
    opensAt: "2026-09-15T00:00:00+03:00",
    closesAt: "2026-10-06T12:00:00+03:00",
  },
};

const testDateToday = new Date("2026-10-22T12:00:00+03:00");
const ieeeDayStatusToday = computeStatus(testDateToday, ieeeDayEvent);
assert.strictEqual(
  ieeeDayStatusToday,
  "ended",
  "IEEE Day 2026 must be in 'ended' state on 22 October 2026"
);
console.log("✓ Test 1 Passed: IEEE Day 2026 computes as 'ended' today");

// Test 2: IEEEXtreme 20.0 on 22 October 2026 (registration closed 17 Oct 2026 23:59 GMT)
const ieeextremeEvent = {
  startsAt: "2026-10-24T00:00:00Z",
  endsAt: "2026-10-25T00:00:00Z",
  registration: {
    opensAt: "2026-09-01T00:00:00Z",
    closesAt: "2026-10-17T23:59:59Z",
  },
};

const ieeextremeStatusToday = computeStatus(testDateToday, ieeextremeEvent);
assert.strictEqual(
  ieeextremeStatusToday,
  "registration-closed",
  "IEEEXtreme 20.0 must be in 'registration-closed' state on 22 October 2026"
);
console.log("✓ Test 2 Passed: IEEEXtreme 20.0 computes as 'registration-closed' today");

// Test 3: IEEE Day during event hours (live)
const duringIeeeDay = new Date("2026-10-06T14:30:00+03:00");
assert.strictEqual(
  computeStatus(duringIeeeDay, ieeeDayEvent),
  "live",
  "IEEE Day must compute as 'live' during event hours"
);
console.log("✓ Test 3 Passed: Live status during event hours");

// Test 4: Registration open window
const duringRegistration = new Date("2026-09-20T10:00:00+03:00");
assert.strictEqual(
  computeStatus(duringRegistration, ieeeDayEvent),
  "registration-open",
  "Event must compute as 'registration-open' during reg window"
);
console.log("✓ Test 4 Passed: 'registration-open' within open/close window");

// Test 5: Upcoming before registration opens
const beforeReg = new Date("2026-09-01T10:00:00+03:00");
assert.strictEqual(
  computeStatus(beforeReg, ieeeDayEvent),
  "upcoming",
  "Event must compute as 'upcoming' before registration opens"
);
console.log("✓ Test 5 Passed: 'upcoming' before registration window");

// Test 6: EAT boundary check (UTC+3 offset)
// 18:00:00 EAT is 15:00:00 UTC
const exactlyAtEndUTC = new Date("2026-10-06T15:00:00Z");
assert.strictEqual(
  computeStatus(exactlyAtEndUTC, ieeeDayEvent),
  "ended",
  "Event must be ended exactly at or after end time"
);
console.log("✓ Test 6 Passed: EAT boundary correctly evaluates to ended at +03:00 threshold");

console.log("\nAll 6 Event Status tests passed successfully!");
