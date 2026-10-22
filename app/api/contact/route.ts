import { NextRequest, NextResponse } from "next/server";
import { ContactFormSchema } from "@/lib/schemas";
import { saveContactSubmission, checkRateLimit } from "@/lib/submissions";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";

    if (!checkRateLimit(ip, 5, 60000)) {
      return NextResponse.json(
        { error: "Too many messages. Please wait a minute before sending another." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = ContactFormSchema.safeParse(body);
    if (!result.success) {
      const issues = result.error.issues.map((e) => ({
        path: e.path.join("."),
        message: e.message,
      }));
      return NextResponse.json({ error: "Validation failed", issues }, { status: 400 });
    }

    const { honeypot, ...validData } = result.data;
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    const record = await saveContactSubmission(validData);

    return NextResponse.json({ success: true, id: record.id }, { status: 201 });
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
