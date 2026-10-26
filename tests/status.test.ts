import { test } from "node:test";
import assert from "node:assert/strict";
import { callStatus, computeStatus, eventStatus } from "../lib/status";

const at = (iso: string) => new Date(iso);

const launch = { start: "2026-11-04T00:00:00+03:00", end: "2026-11-04T23:59:00+03:00" };
const volunteer = { closes: "2026-10-27T23:59:00+03:00" };

test("eventStatus: launch is upcoming before 4 November (EAT)", () => {
  assert.equal(eventStatus(launch, at("2026-11-03T23:59:59+03:00")), "upcoming");
});

test("eventStatus: launch is live during 4 November (EAT)", () => {
  // 21:00 UTC on 3 Nov is already midnight on 4 Nov in Kampala.
  assert.equal(eventStatus(launch, at("2026-11-03T21:00:00Z")), "live");
  assert.equal(eventStatus(launch, at("2026-11-04T14:00:00+03:00")), "live");
});

test("eventStatus: launch is past once its end has been reached", () => {
  assert.equal(eventStatus(launch, at("2026-11-04T23:59:00+03:00")), "past");
  assert.equal(eventStatus(launch, at("2026-11-05T09:00:00+03:00")), "past");
});

test("eventStatus: an event without an end is past from its start", () => {
  assert.equal(eventStatus({ start: "2026-10-06T09:00:00+03:00" }, at("2026-10-06T09:00:00+03:00")), "past");
});

test("callStatus: volunteer call is open more than 48 hours out", () => {
  assert.equal(callStatus(volunteer, at("2026-10-20T10:00:00+03:00")), "open");
});

test("callStatus: volunteer call is closing soon inside 48 hours", () => {
  assert.equal(callStatus(volunteer, at("2026-10-26T10:00:00+03:00")), "closing-soon");
  assert.equal(callStatus(volunteer, at("2026-10-27T23:59:00+03:00")), "closing-soon");
});

test("callStatus: volunteer call is closed after 23:59 EAT on 27 October", () => {
  assert.equal(callStatus(volunteer, at("2026-10-27T21:00:00Z")), "closed");
  assert.equal(callStatus(volunteer, at("2026-10-28T08:00:00+03:00")), "closed");
});

test("callStatus: a call before its opening time is upcoming", () => {
  const call = { opens: "2026-11-10T00:00:00+03:00", closes: "2026-11-20T23:59:00+03:00" };
  assert.equal(callStatus(call, at("2026-11-01T00:00:00+03:00")), "upcoming");
});

test("computeStatus: registration window and event phases", () => {
  const ieeeDay = {
    startsAt: "2026-10-06T12:00:00+03:00",
    endsAt: "2026-10-06T18:00:00+03:00",
    registration: { opensAt: "2026-09-15T00:00:00+03:00", closesAt: "2026-10-06T12:00:00+03:00" },
  };
  assert.equal(computeStatus(at("2026-09-01T10:00:00+03:00"), ieeeDay), "upcoming");
  assert.equal(computeStatus(at("2026-09-20T10:00:00+03:00"), ieeeDay), "registration-open");
  assert.equal(computeStatus(at("2026-10-06T14:30:00+03:00"), ieeeDay), "live");
  // 18:00 EAT is 15:00 UTC.
  assert.equal(computeStatus(at("2026-10-06T15:00:00Z"), ieeeDay), "ended");
});

test("computeStatus: IEEEXtreme registration closed at 23:59 GMT on 17 October", () => {
  const xtreme = {
    startsAt: "2026-10-25T00:00:00+03:00",
    endsAt: "2026-10-26T00:00:00+03:00",
    registration: { opensAt: "2026-09-01T00:00:00Z", closesAt: "2026-10-17T23:59:00Z" },
  };
  assert.equal(computeStatus(at("2026-10-17T23:58:59Z"), xtreme), "registration-open");
  assert.equal(computeStatus(at("2026-10-22T12:00:00+03:00"), xtreme), "registration-closed");
});
