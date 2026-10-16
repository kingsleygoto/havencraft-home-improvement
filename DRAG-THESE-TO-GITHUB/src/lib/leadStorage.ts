import fs from "fs";
import path from "path";

export interface LeadSubmission {
  id: string;
  timestamp: string;
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  zipCode: string;
  streetAddress?: string;
  preferredContactMethod?: "phone" | "email" | "text";
  projectDescription?: string;
  preferredConsultationDate?: string;
  consultationConsent: boolean;
  marketingConsent: boolean;
  sourcePage?: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
  };
  status: "new" | "contacted" | "scheduled";
}

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.jsonl");

// Ensure data folder exists
function ensureStorage() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, "", "utf-8");
  }
}

/**
 * Persists a lead atomically to the server filesystem.
 * Integrates with optional webhook/email notification environment variables.
 */
export async function saveLead(lead: Omit<LeadSubmission, "id" | "timestamp" | "status">): Promise<LeadSubmission> {
  ensureStorage();

  const id = "HC-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase();
  const timestamp = new Date().toISOString();

  const fullLead: LeadSubmission = {
    ...lead,
    id,
    timestamp,
    status: "new",
  };

  const line = JSON.stringify(fullLead) + "\n";
  await fs.promises.appendFile(LEADS_FILE, line, "utf-8");

  // Optional: Trigger outgoing webhook for CRM (e.g., Zapier, HubSpot, Slack) if configured
  const webhookUrl = process.env.LEAD_NOTIFICATION_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "new_lead",
          leadId: id,
          projectType: lead.projectType,
          zipCode: lead.zipCode,
          timestamp,
        }),
      }).catch((err) => console.error("Webhook notification error:", err));
    } catch {
      // Non-blocking error handling
    }
  }

  return fullLead;
}

/**
 * Get lead count (safe for QA without leaking PII)
 */
export async function getLeadStats(): Promise<{ totalLeads: number; lastSubmission?: string }> {
  ensureStorage();
  try {
    const content = await fs.promises.readFile(LEADS_FILE, "utf-8");
    const lines = content.trim().split("\n").filter(Boolean);
    const lastLine = lines.length > 0 ? JSON.parse(lines[lines.length - 1]) : null;
    return {
      totalLeads: lines.length,
      lastSubmission: lastLine?.timestamp,
    };
  } catch {
    return { totalLeads: 0 };
  }
}
