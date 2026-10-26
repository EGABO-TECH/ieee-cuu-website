import { NextRequest, NextResponse } from "next/server";
import { getAllJoins, getAllContacts } from "@/lib/submissions";

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
    const rows = contacts.map((c) => [
      c.id,
      `"${c.name.replace(/"/g, '""')}"`,
      c.email,
      `"${c.topic.replace(/"/g, '""')}"`,
      `"${c.message.replace(/"/g, '""')}"`,
      c.createdAt,
    ]);
    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

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
    `"${j.fullName.replace(/"/g, '""')}"`,
    j.email,
    j.studentId || "",
    `"${j.program.replace(/"/g, '""')}"`,
    j.yearOfStudy,
    `"${j.interests.join("; ")}"`,
    `"${j.contactPreferences.join("; ")}"`,
    j.createdAt,
  ]);
  const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

  return new NextResponse(csvContent, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="cuu_ieee_signups_${Date.now()}.csv"`,
    },
  });
}
