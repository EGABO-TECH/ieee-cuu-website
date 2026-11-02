import { NextRequest, NextResponse } from "next/server";
import { getAllJoins, getAllContacts } from "@/lib/submissions";

/** Quote a CSV cell and neutralise spreadsheet formulas (CSV injection). */
function cell(value: unknown): string {
  let text = value == null ? "" : String(value);
  if (/^[=+\-@\t\r]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
}

function toCsv(headers: string[], rows: unknown[][]): string {
  return [headers, ...rows].map((r) => r.map(cell).join(",")).join("\r\n");
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("key") || req.headers.get("authorization")?.replace("Bearer ", "");
  const expectedSecret = process.env.ADMIN_SECRET;

  // No built-in fallback: without ADMIN_SECRET the export stays locked.
  if (!expectedSecret) {
    return NextResponse.json({ error: "Export is not configured" }, { status: 503 });
  }

  if (!secret || secret !== expectedSecret) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  const type = searchParams.get("type") || "joins";

  if (type === "contacts") {
    const contacts = getAllContacts();
    const headers = ["ID", "Name", "Email", "Topic", "Message", "Created At"];
    const rows = contacts.map((c) => [c.id, c.name, c.email, c.topic, c.message, c.createdAt]);
    const csvContent = toCsv(headers, rows);

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="cuu_ieee_contacts_${Date.now()}.csv"`,
      },
    });
  }

  const joins = getAllJoins();
  const headers = [
    "ID",
    "Full Name",
    "Email",
    "Student ID",
    "Program",
    "Year of Study",
    "Interests",
    "Contact Preferences",
    "Created At",
  ];
  const rows = joins.map((j) => [
    j.id,
    j.fullName,
    j.email,
    j.studentId,
    j.program,
    j.yearOfStudy,
    j.interests.join("; "),
    j.contactPreferences.join("; "),
    j.createdAt,
  ]);
  const csvContent = toCsv(headers, rows);

  return new NextResponse(csvContent, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="cuu_ieee_signups_${Date.now()}.csv"`,
    },
  });
}
