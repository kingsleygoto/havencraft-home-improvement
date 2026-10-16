import { NextRequest, NextResponse } from "next/server";
import { saveLead, getLeadStats } from "@/lib/leadStorage";

// In-memory rate limiting map: IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const MAX_REQUESTS_PER_WINDOW = 6;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return true;
}

// US Phone validation helper: standard 10-digit number
function isValidUsPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}

// US 5-digit ZIP validation
function isValidZip(zip: string): boolean {
  return /^\d{5}(-\d{4})?$/.test(zip.trim());
}

// Email format regex
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many submission attempts. Please wait a few minutes before trying again or call our team directly." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // 1. Honeypot check (anti-bot)
    if (body._company_hp || body.website_url) {
      // Pretend success to fool spam bots without storing garbage
      return NextResponse.json({ success: true, leadId: "HC-VERIFIED", message: "Estimate request received." });
    }

    const {
      fullName,
      email,
      phone,
      projectType,
      zipCode,
      streetAddress,
      preferredContactMethod,
      projectDescription,
      preferredConsultationDate,
      consultationConsent,
      marketingConsent,
      sourcePage,
      utm,
    } = body;

    // 2. Strict server-side validation
    const errors: Record<string, string> = {};

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      errors.fullName = "Please provide your full name (minimum 2 characters).";
    }

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      errors.email = "Please provide a valid email address.";
    }

    if (!phone || typeof phone !== "string" || !isValidUsPhone(phone)) {
      errors.phone = "Please provide a valid 10-digit phone number.";
    }

    if (!projectType || typeof projectType !== "string") {
      errors.projectType = "Please select a project type.";
    }

    if (!zipCode || typeof zipCode !== "string" || !isValidZip(zipCode)) {
      errors.zipCode = "Please provide a valid 5-digit US ZIP code.";
    }

    if (!consultationConsent) {
      errors.consultationConsent = "Please check the box agreeing to be contacted regarding your estimate.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ error: "Validation failed", errors }, { status: 400 });
    }

    // 3. Persist lead on server
    const saved = await saveLead({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      projectType: projectType.trim(),
      zipCode: zipCode.trim(),
      streetAddress: streetAddress?.trim(),
      preferredContactMethod: preferredContactMethod || "phone",
      projectDescription: projectDescription?.trim(),
      preferredConsultationDate: preferredConsultationDate?.trim(),
      consultationConsent: Boolean(consultationConsent),
      marketingConsent: Boolean(marketingConsent),
      sourcePage: sourcePage?.trim() || "/",
      utm: utm || {},
    });

    return NextResponse.json({
      success: true,
      leadId: saved.id,
      timestamp: saved.timestamp,
      message:
        "Thank you! Your estimate request has been received. Our project planning team will review your details and reach out within 1 business day.",
    });
  } catch (error) {
    console.error("Error processing lead submission:", error);
    return NextResponse.json(
      { error: "A server error occurred while processing your request. Please call us at (800) 555-0199 or try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const stats = await getLeadStats();
  return NextResponse.json({ status: "Lead persistence service active", ...stats });
}
