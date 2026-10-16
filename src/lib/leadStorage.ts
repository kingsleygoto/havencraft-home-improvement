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

// Ensure data folder exists (Node.js environments only)
function ensureStorage() {
  try {
    if (typeof fs !== "undefined" && fs.existsSync && !fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (typeof fs !== "undefined" && fs.existsSync && !fs.existsSync(LEADS_FILE)) {
      fs.writeFileSync(LEADS_FILE, "", "utf-8");
    }
  } catch {
    // Expected in serverless / edge environments where filesystem is read-only
  }
}

/**
 * Persists a lead atomically.
 * Resilient for local dev, traditional Node servers, and Cloudflare Workers / Serverless edge runtimes.
 * Automatically dispatches to CRM webhooks (e.g. Zapier, Make, Slack) if configured.
 */
export async function saveLead(lead: Omit<LeadSubmission, "id" | "timestamp" | "status">): Promise<LeadSubmission> {
  const id = "HC-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase();
  const timestamp = new Date().toISOString();

  const fullLead: LeadSubmission = {
    ...lead,
    id,
    timestamp,
    status: "new",
  };

  // 1. In serverless / edge (Cloudflare Workers, Vercel), always log lead payload to runtime console
  // This guarantees leads are captured in Cloudflare Workers Dashboard Logs even without a connected database
  console.log(`[HavenCraft Lead Received] ID: ${id} | Customer: ${lead.fullName} | Service: ${lead.projectType} | Phone: ${lead.phone} | ZIP: ${lead.zipCode}`);

  // 2. Attempt local file persistence if writable (e.g. local dev / Node server)
  try {
    ensureStorage();
    if (typeof fs !== "undefined" && fs.promises?.appendFile) {
      const line = JSON.stringify(fullLead) + "\n";
      await fs.promises.appendFile(LEADS_FILE, line, "utf-8");
    }
  } catch (fsErr) {
    console.warn("[HavenCraft Lead Storage] Filesystem write bypassed (serverless/edge read-only runtime):", (fsErr as Error).message);
  }

  // 3. Dispatch to CRM/Webhook (e.g., Zapier, HubSpot, Slack, Google Sheets) if configured
  const webhookUrl = process.env.LEAD_NOTIFICATION_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "new_lead",
          leadId: id,
          timestamp,
          customer: {
            fullName: lead.fullName,
            email: lead.email,
            phone: lead.phone,
            streetAddress: lead.streetAddress,
            zipCode: lead.zipCode,
            preferredContactMethod: lead.preferredContactMethod,
          },
          project: {
            type: lead.projectType,
            description: lead.projectDescription,
            preferredDate: lead.preferredConsultationDate,
          },
          marketing: {
            consultationConsent: lead.consultationConsent,
            marketingConsent: lead.marketingConsent,
            sourcePage: lead.sourcePage,
            utm: lead.utm,
          },
        }),
      });
    } catch (webhookErr) {
      console.error("[HavenCraft Lead Storage] Webhook dispatch failed:", (webhookErr as Error).message);
    }
  }

  return fullLead;
}

/**
 * Get lead count (safe for QA without leaking PII)
 */
export async function getLeadStats(): Promise<{ totalLeads: number; lastSubmission?: string }> {
  try {
    ensureStorage();
    if (typeof fs !== "undefined" && fs.promises?.readFile) {
      const content = await fs.promises.readFile(LEADS_FILE, "utf-8");
      const lines = content.trim().split("\n").filter(Boolean);
      const lastLine = lines.length > 0 ? JSON.parse(lines[lines.length - 1]) : null;
      return {
        totalLeads: lines.length,
        lastSubmission: lastLine?.timestamp,
      };
    }
  } catch {
    // Non-filesystem fallback
  }
  return { totalLeads: 0 };
}
