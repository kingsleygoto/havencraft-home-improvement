// Privacy-conscious client-side event tracking utility
// Events tracked:
// - estimate_cta_click
// - phone_click
// - project_type_selected
// - estimate_form_start
// - estimate_form_submit_success
// - estimate_form_submit_error

type AnalyticsEvent =
  | { name: "estimate_cta_click"; params: { location: string; button_label: string } }
  | { name: "phone_click"; params: { location: string } }
  | { name: "project_type_selected"; params: { project_type: string; source: string } }
  | { name: "estimate_form_start"; params: { step: number; prefilled_project?: string } }
  | { name: "estimate_form_submit_success"; params: { project_type: string; lead_id_prefix: string } }
  | { name: "estimate_form_submit_error"; params: { error_type: string } };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;

  // Never track PII (names, emails, phone numbers, addresses)
  const sanitizedParams = {
    ...event.params,
    timestamp: new Date().toISOString(),
  };

  // Push to GTM dataLayer if present
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: event.name,
      ...sanitizedParams,
    });
  }

  // Push to Google Analytics gtag if present and configured
  if (typeof window.gtag === "function") {
    window.gtag("event", event.name, sanitizedParams);
  }

  // Developer mode debugging
  if (process.env.NODE_ENV === "development") {
    console.log(`[HavenCraft Analytics] Event: ${event.name}`, sanitizedParams);
  }
}
