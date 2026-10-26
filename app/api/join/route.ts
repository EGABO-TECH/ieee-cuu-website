import { NextRequest, NextResponse } from "next/server";
import { JoinFormSchema } from "@/lib/schemas";
import { saveJoinSubmission, checkRateLimit } from "@/lib/submissions";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";

    // Rate limiting: 5 submissions per minute per IP
    if (!checkRateLimit(ip, 5, 60000)) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait a minute before trying again." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Zod validation (includes honeypot check)
    const result = JoinFormSchema.safeParse(body);
    if (!result.success) {
      const issues = result.error.issues.map((e) => ({
        path: e.path.join("."),
        message: e.message,
      }));
      return NextResponse.json({ error: "Validation failed", issues }, { status: 400 });
    }

    const { honeypot, ...validData } = result.data;

    // Reject if honeypot was filled
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    const { record, persisted } = await saveJoinSubmission({
      fullName: validData.fullName,
      email: validData.email,
      studentId: validData.studentId || undefined,
      program: validData.program,
      yearOfStudy: validData.yearOfStudy,
      interests: validData.interests,
      contactPreferences: validData.contactPreferences,
      source: "website_join_form",
    });

    if (!persisted) {
      return NextResponse.json(
        { error: "We couldn't save your registration right now. Please try again later, or contact the branch on social media." },
        { status: 503 }
      );
    }

    return NextResponse.json({ success: true, id: record.id }, { status: 201 });
  } catch (error) {
    console.error("Error processing join submission:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
