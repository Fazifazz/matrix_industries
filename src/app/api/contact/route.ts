import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";

// Basic in-memory rate limiter
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

// Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email format"),
  company: z.string().max(100).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
  botcheck: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const requestData = rateLimit.get(ip);

    if (requestData && now - requestData.timestamp < RATE_LIMIT_WINDOW) {
      if (requestData.count >= MAX_REQUESTS) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          { status: 429 }
        );
      }
      requestData.count++;
    } else {
      rateLimit.set(ip, { count: 1, timestamp: now });
    }

    // 2. Parse Body
    const body = await req.json();

    // 3. Honeypot check
    if (body.botcheck) {
      // It's a bot, quietly return success so they don't know they were caught
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 4. Validate fields
    const validatedData = contactSchema.parse(body);

    // 5. Store data
    const submission = {
      ...validatedData,
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      ip,
    };

    const filePath = path.join(process.cwd(), "data", "submissions.json");
    
    // Ensure the data directory exists
    const dirPath = path.join(process.cwd(), "data");
    await fs.mkdir(dirPath, { recursive: true });

    let submissions = [];
    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      if (fileData) {
        submissions = JSON.parse(fileData);
      }
    } catch (e) {
      // If file doesn't exist, we just start with an empty array
      if ((e as NodeJS.ErrnoException).code !== "ENOENT") {
        throw e;
      }
    }

    submissions.push(submission);
    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), "utf-8");

    // 6. Return success
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
