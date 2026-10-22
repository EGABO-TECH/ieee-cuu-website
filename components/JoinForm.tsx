"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Loader2, AlertCircle } from "lucide-react";
import Link from "next/link";

const INTEREST_OPTIONS = [
  "Software Engineering & Web Development",
  "Artificial Intelligence & Machine Learning",
  "Cybersecurity & Networks",
  "Data Science & Analytics",
  "Embedded Systems & Robotics",
  "Women in Engineering (WIE)",
  "Tech Leadership & Project Management",
];

const CONTACT_PREFERENCES = [
  "IEEEXtreme 24h Programming Competition",
  "Hands-on Technical Workshops & Code Labs",
  "Branch Volunteering & Organizing Committee",
];

const YEAR_OPTIONS = ["Year 1", "Year 2", "Year 3", "Year 4", "Postgraduate"];

export function JoinForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    studentId: "",
    program: "",
    yearOfStudy: "",
    interests: [] as string[],
    contactPreferences: [] as string[],
    consent: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleInterest = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(item)
        ? prev.interests.filter((i) => i !== item)
        : [...prev.interests, item],
    }));
    if (errors.interests) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.interests;
        return next;
      });
    }
  };

  const togglePreference = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      contactPreferences: prev.contactPreferences.includes(item)
        ? prev.contactPreferences.filter((p) => p !== item)
        : [...prev.contactPreferences, item],
    }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name.";
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Please enter a valid university or personal email address.";
    }
    if (!formData.program.trim()) {
      errs.program = "Please enter your degree or course programme.";
    }
    if (!formData.yearOfStudy) {
      errs.yearOfStudy = "Please select your year of study.";
    }
    if (formData.interests.length === 0) {
      errs.interests = "Please select at least one area of interest.";
    }
    if (!formData.consent) {
      errs.consent = "You must agree to the privacy consent to submit.";
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus on first error element
      const firstKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstKey);
      el?.focus();
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || "Submission failed. Please try again.");
        setSubmitting(false);
        return;
      }

      // Success: redirect to confirmation page
      router.push("/join/success");
    } catch (err) {
      setServerError("Network error. Please check your connection and try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
      <div className="max-w-xl">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
          Branch Membership Interest Form
        </h2>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          Submit your details to register your interest with the IEEE Student Branch at Cavendish University.
          We use this to connect you to branch activities and assist with your IEEE onboarding.
        </p>
      </div>

      {serverError && (
        <div
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <p>{serverError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
        {/* Honeypot field (hidden from view) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website-hp">Leave this empty</label>
          <input
            id="website-hp"
            type="text"
            tabIndex={-1}
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            autoComplete="off"
          />
        </div>

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`mt-2 block w-full rounded-xl border ${
              errors.fullName ? "border-red-500 focus:ring-red-400" : "border-slate-200 focus:border-[#0D6E6E] focus:ring-[#0D6E6E]"
            } px-4 py-3 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-1`}
            placeholder="e.g. Joanita Nakato"
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-red-600">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* University Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
            University or personal email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`mt-2 block w-full rounded-xl border ${
              errors.email ? "border-red-500 focus:ring-red-400" : "border-slate-200 focus:border-[#0D6E6E] focus:ring-[#0D6E6E]"
            } px-4 py-3 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-1`}
            placeholder="e.g. jnakato@cavendish.ac.ug"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Student ID (Optional) */}
        <div>
          <label htmlFor="studentId" className="block text-sm font-semibold text-slate-900">
            Cavendish Student ID <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            id="studentId"
            type="text"
            value={formData.studentId}
            onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
            className="mt-2 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#0D6E6E] focus:outline-none focus:ring-1 focus:ring-[#0D6E6E]"
            placeholder="e.g. 23/BIT/042"
          />
        </div>

        {/* Program of Study & Year of Study */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="program" className="block text-sm font-semibold text-slate-900">
              Program of study <span className="text-red-500">*</span>
            </label>
            <input
              id="program"
              type="text"
              required
              value={formData.program}
              onChange={(e) => setFormData({ ...formData, program: e.target.value })}
              aria-describedby={errors.program ? "program-error" : undefined}
              className={`mt-2 block w-full rounded-xl border ${
                errors.program ? "border-red-500" : "border-slate-200"
              } px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#0D6E6E] focus:outline-none focus:ring-1 focus:ring-[#0D6E6E]`}
              placeholder="e.g. BSc Computer Science"
            />
            {errors.program && (
              <p id="program-error" className="mt-1.5 text-xs text-red-600">
                {errors.program}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="yearOfStudy" className="block text-sm font-semibold text-slate-900">
              Year of study <span className="text-red-500">*</span>
            </label>
            <select
              id="yearOfStudy"
              required
              value={formData.yearOfStudy}
              onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
              aria-describedby={errors.yearOfStudy ? "yearOfStudy-error" : undefined}
              className={`mt-2 block w-full rounded-xl border ${
                errors.yearOfStudy ? "border-red-500" : "border-slate-200"
              } bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#0D6E6E] focus:outline-none focus:ring-1 focus:ring-[#0D6E6E]`}
            >
              <option value="">Select year...</option>
              {YEAR_OPTIONS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
            {errors.yearOfStudy && (
              <p id="yearOfStudy-error" className="mt-1.5 text-xs text-red-600">
                {errors.yearOfStudy}
              </p>
            )}
          </div>
        </div>

        {/* Areas of Interest (Multi-select) */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-1">
            Areas of interest <span className="text-red-500">*</span>
          </label>
          <p className="text-xs text-slate-500 mb-3">Select all that apply to you:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {INTEREST_OPTIONS.map((item) => {
              const selected = formData.interests.includes(item);
              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => toggleInterest(item)}
                  className={`flex items-start gap-2.5 rounded-xl border p-3 text-left text-xs sm:text-sm transition ${
                    selected
                      ? "border-[#0D6E6E] bg-[#0D6E6E]/5 text-slate-900 font-medium"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border mt-0.5 ${
                      selected ? "border-[#0D6E6E] bg-[#0D6E6E] text-white" : "border-slate-300 bg-white"
                    }`}
                  >
                    {selected && <Check size={11} strokeWidth={3} />}
                  </span>
                  <span>{item}</span>
                </button>
              );
            })}
          </div>
          {errors.interests && (
            <p className="mt-2 text-xs text-red-600">{errors.interests}</p>
          )}
        </div>

        {/* Contact Preferences */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-1">
            I want to be contacted about:
          </label>
          <div className="space-y-2 mt-2">
            {CONTACT_PREFERENCES.map((pref) => {
              const checked = formData.contactPreferences.includes(pref);
              return (
                <label key={pref} className="flex items-center gap-3 cursor-pointer text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => togglePreference(pref)}
                    className="h-4 w-4 rounded border-slate-300 text-[#0D6E6E] focus:ring-[#0D6E6E]"
                  />
                  <span>{pref}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              id="consent"
              type="checkbox"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0D6E6E] focus:ring-[#0D6E6E]"
            />
            <span className="text-xs text-slate-600 leading-relaxed">
              I consent to having IEEE Student Branch Cavendish University Uganda store my contact details
              to communicate branch news, workshops, and membership updates, in accordance with the{" "}
              <Link href="/privacy" className="text-[#0D6E6E] underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1.5 text-xs text-red-600">{errors.consent}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#0D6E6E] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#1A9090] disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Submitting registration...
              </>
            ) : (
              "Submit Branch Registration"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
