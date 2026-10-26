"use client";

import { useState } from "react";
import { Lock, Download, RefreshCw, Key, ShieldCheck, AlertCircle } from "lucide-react";

interface JoinRecord {
  id: string;
  fullName: string;
  email: string;
  studentId?: string;
  program: string;
  yearOfStudy: string;
  interests: string[];
  contactPreferences: string[];
  createdAt: string;
}

export default function AdminPage() {
  const [accessKey, setAccessKey] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [records, setRecords] = useState<JoinRecord[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`/api/admin/export?key=${encodeURIComponent(accessKey)}&type=joins`, {
        headers: { Accept: "text/csv" },
      });

      if (!res.ok) {
        setError("Invalid access key. Please verify with the branch executive committee.");
        setLoading(false);
        return;
      }

      const csv = await res.text();
      // Parse CSV rows for table preview
      const lines = csv.trim().split("\n");
      if (lines.length > 1) {
        const parsed = lines.slice(1).map((line) => {
          // simple CSV parser
          const cols = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map((c) => c.replace(/^"|"$/g, ""));
          return {
            id: cols[0],
            fullName: cols[1],
            email: cols[2],
            studentId: cols[3],
            program: cols[4],
            yearOfStudy: cols[5],
            interests: cols[6] ? cols[6].split("; ") : [],
            contactPreferences: cols[7] ? cols[7].split("; ") : [],
            createdAt: cols[8],
          };
        });
        setRecords(parsed);
      } else {
        setRecords([]);
      }

      setAuthenticated(true);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch data.");
      setLoading(false);
    }
  };

  const handleDownload = (type: "joins" | "contacts") => {
    const url = `/api/admin/export?key=${encodeURIComponent(accessKey)}&type=${type}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Branch Administration Portal
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Protected view for the branch secretary and executive committee to view signups and export data as CSV.
            </p>
          </div>

          {!authenticated ? (
            <div className="mt-10 max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0D6E6E]/10 text-[#0D6E6E] mb-5">
                <Lock size={24} />
              </div>

              <h2 className="font-serif text-xl font-bold text-slate-900">Admin Authentication</h2>
              <p className="mt-1 text-xs text-slate-500">
                Enter your branch admin access key to unlock member records.
              </p>

              {error && (
                <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-800">
                  <AlertCircle size={15} className="shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="adminKey" className="block text-xs font-semibold text-slate-700">
                    Access Key
                  </label>
                  <input
                    id="adminKey"
                    type="password"
                    required
                    value={accessKey}
                    onChange={(e) => setAccessKey(e.target.value)}
                    className="mt-1.5 block w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#0D6E6E] focus:outline-none focus:ring-1 focus:ring-[#0D6E6E]"
                    placeholder="Enter branch access key"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0D6E6E] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#1A9090] disabled:opacity-60"
                >
                  {loading ? "Verifying..." : "Unlock Admin Dashboard"}
                </button>
              </form>
            </div>
          ) : (
            <div className="mt-10 space-y-8">
              {/* Actions bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  Authenticated Session ({records.length} sign-up record{records.length === 1 ? "" : "s"})
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handleDownload("joins")}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#0D6E6E] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#1A9090]"
                  >
                    <Download size={13} /> Export Sign-ups CSV
                  </button>
                  <button
                    onClick={() => handleDownload("contacts")}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    <Download size={13} /> Export Inquiries CSV
                  </button>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b border-slate-100 bg-slate-50 text-slate-600 font-semibold">
                      <tr>
                        <th className="px-4 py-3">Full Name</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Student ID</th>
                        <th className="px-4 py-3">Program &amp; Year</th>
                        <th className="px-4 py-3">Interests</th>
                        <th className="px-4 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {records.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="px-4 py-8 text-center text-slate-400">
                            No member sign-ups recorded yet.
                          </td>
                        </tr>
                      ) : (
                        records.map((r) => (
                          <tr key={r.id} className="hover:bg-slate-50/50">
                            <td className="px-4 py-3 font-semibold text-slate-900">{r.fullName}</td>
                            <td className="px-4 py-3">{r.email}</td>
                            <td className="px-4 py-3 text-slate-500">{r.studentId || "—"}</td>
                            <td className="px-4 py-3">{r.program} ({r.yearOfStudy})</td>
                            <td className="px-4 py-3 max-w-xs truncate" title={r.interests.join(", ")}>
                              {r.interests.join(", ")}
                            </td>
                            <td className="px-4 py-3 text-slate-400 whitespace-nowrap">
                              {r.createdAt ? new Date(r.createdAt).toLocaleDateString() : "—"}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
