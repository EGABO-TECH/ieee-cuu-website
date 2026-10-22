import { z } from "zod";

export const JoinFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be under 100 characters"),
  email: z
    .string()
    .email("Please provide a valid email address")
    .refine(
      (val) => val.toLowerCase().includes("@"),
      "Please provide a valid email address"
    ),
  studentId: z.string().max(50).optional().default(""),
  program: z
    .string()
    .min(2, "Program of study is required")
    .max(100),
  yearOfStudy: z.enum(["Year 1", "Year 2", "Year 3", "Year 4", "Postgraduate"] as const, {
    message: "Please select your year of study",
  }),
  interests: z
    .array(z.string())
    .min(1, "Select at least one area of interest"),
  contactPreferences: z
    .array(z.string())
    .default([]),
  consent: z
    .boolean()
    .refine((val) => val === true, "You must consent to the branch privacy policy"),
  honeypot: z.string().max(0, "Bot detected").optional().default(""),
});

export type JoinFormData = z.infer<typeof JoinFormSchema>;

export const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  topic: z.string().min(1, "Please select a topic"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  honeypot: z.string().max(0, "Bot detected").optional().default(""),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
