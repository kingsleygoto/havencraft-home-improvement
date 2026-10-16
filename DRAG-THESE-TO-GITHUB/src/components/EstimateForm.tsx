"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";
import { trackEvent } from "@/lib/analytics";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

interface EstimateFormProps {
  initialProjectType?: string;
  sourcePage?: string;
  onSuccess?: (leadId: string) => void;
  className?: string;
}

export default function EstimateForm({
  initialProjectType = "",
  sourcePage = "/",
  onSuccess,
  className = "",
}: EstimateFormProps) {
  // Form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState(initialProjectType || "Bathroom Remodeling");
  const [zipCode, setZipCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [preferredContactMethod, setPreferredContactMethod] = useState<"phone" | "email" | "text">("phone");
  const [projectDescription, setProjectDescription] = useState("");
  const [preferredConsultationDate, setPreferredConsultationDate] = useState("");
  const [consultationConsent, setConsultationConsent] = useState(true);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  // Validation & UI states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadId, setLeadId] = useState("");
  const [serverError, setServerError] = useState("");
  const [step, setStep] = useState<1 | 2>(1); // Progressive 2-step layout for lower friction

  // Prefill project type if prop changes
  useEffect(() => {
    if (initialProjectType) {
      setProjectType(initialProjectType);
      trackEvent({
        name: "project_type_selected",
        params: { project_type: initialProjectType, source: "form_prefill" },
      });
    }
  }, [initialProjectType]);

  // Track form start on first touch
  useEffect(() => {
    const handleFirstInteraction = () => {
      trackEvent({
        name: "estimate_form_start",
        params: { step: 1, prefilled_project: projectType },
      });
      window.removeEventListener("focusin", handleFirstInteraction);
    };
    window.addEventListener("focusin", handleFirstInteraction, { once: true });
    return () => window.removeEventListener("focusin", handleFirstInteraction);
  }, [projectType]);

  // Format phone number nicely as user types (XXX) XXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    let formatted = raw;
    if (raw.length > 3 && raw.length <= 6) {
      formatted = `(${raw.slice(0, 3)}) ${raw.slice(3)}`;
    } else if (raw.length > 6) {
      formatted = `(${raw.slice(0, 3)}) ${raw.slice(3, 6)}-${raw.slice(6, 10)}`;
    }
    setPhone(formatted);
  };

  const validateStep1 = (): boolean => {
    const errs: Record<string, string> = {};
    if (!projectType) errs.projectType = "Please select a project type.";
    if (!zipCode.trim() || !/^\d{5}$/.test(zipCode.trim())) {
      errs.zipCode = "Please provide a valid 5-digit US ZIP code.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateAll = (): boolean => {
    const errs: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name.";
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    const rawPhone = phone.replace(/\D/g, "");
    if (rawPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!projectType) {
      errs.projectType = "Please select your primary project.";
    }
    if (!zipCode.trim() || !/^\d{5}$/.test(zipCode.trim())) {
      errs.zipCode = "Please enter a 5-digit US ZIP code.";
    }
    if (!consultationConsent) {
      errs.consultationConsent = "Please check the box to authorize HavenCraft to contact you regarding your estimate.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!validateAll()) {
      trackEvent({
        name: "estimate_form_submit_error",
        params: { error_type: "client_validation_failed" },
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Extract UTM parameters if present in URL
      const searchParams = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
      const utm = {
        source: searchParams.get("utm_source") || undefined,
        medium: searchParams.get("utm_medium") || undefined,
        campaign: searchParams.get("utm_campaign") || undefined,
        term: searchParams.get("utm_term") || undefined,
        content: searchParams.get("utm_content") || undefined,
      };

      const payload = {
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
        _company_hp: honeypot, // Spam honeypot
      };

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Unable to submit your estimate request. Please try again.");
      }

      setIsSuccess(true);
      setLeadId(data.leadId);

      trackEvent({
        name: "estimate_form_submit_success",
        params: {
          project_type: projectType,
          lead_id_prefix: data.leadId.substring(0, 6),
        },
      });

      if (onSuccess) {
        onSuccess(data.leadId);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission failed. Please call us at (800) 555-0199.";
      setServerError(msg);
      trackEvent({
        name: "estimate_form_submit_error",
        params: { error_type: "server_submission_error" },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS STATE
  if (isSuccess) {
    return (
      <div className={`p-8 bg-[#F7F6F1] rounded-2xl border border-[#DDE2DF] text-center ${className}`}>
        <div className="w-16 h-16 bg-[#173D35]/10 text-[#173D35] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="inline-block px-3 py-1 bg-[#173D35] text-white text-xs font-semibold tracking-wider uppercase rounded-full mb-3">
          Estimate Request Received
        </span>
        <h3 className="text-2xl font-bold text-[#242824] mb-2">Thank You, {fullName.split(" ")[0]}!</h3>
        <p className="text-sm font-mono text-[#58645E] mb-4">
          Reference Number: <span className="font-semibold text-[#173D35]">{leadId}</span>
        </p>
        <div className="bg-white p-5 rounded-xl border border-[#DDE2DF] text-left text-sm text-[#242824] mb-6 space-y-2">
          <p className="font-semibold text-[#173D35]">What Happens Next:</p>
          <ul className="list-disc pl-5 space-y-1 text-[#58645E]">
            <li>A HavenCraft project coordinator will review your <strong>{projectType}</strong> project.</li>
            <li>We will contact you via <strong>{preferredContactMethod}</strong> within 1 business day to discuss your goals and confirm measurements.</li>
            <li>No high-pressure sales—just clear information, realistic options, and a transparent written estimate.</li>
          </ul>
        </div>
        <p className="text-xs text-[#58645E]">
          Need immediate assistance? Call our project desk directly at{" "}
          <a href={`tel:${siteConfig.contact.phoneTel}`} className="font-semibold text-[#173D35] underline">
            {siteConfig.contact.phoneDisplay}
          </a>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={step === 1 ? handleNextStep : handleSubmit}
      noValidate
      className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-[#DDE2DF] ${className}`}
    >
      {/* Honeypot field (hidden from visual users and screen readers, traps automated spam bots) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="_company_hp">Do not fill this field</label>
        <input
          type="text"
          id="_company_hp"
          name="_company_hp"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Form Progress indicator */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-semibold text-[#58645E] mb-2 uppercase tracking-wider">
          <span className={step >= 1 ? "text-[#173D35]" : ""}>Step 1: Project Details</span>
          <span className={step >= 2 ? "text-[#173D35]" : ""}>Step 2: Contact Info</span>
        </div>
        <div className="w-full bg-[#E0E4E1] h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-[#173D35] h-full transition-all duration-300"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>
      </div>

      {serverError && (
        <div
          role="alert"
          className="mb-5 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl text-sm flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Unable to submit estimate request</p>
            <p className="text-xs mt-0.5">{serverError}</p>
          </div>
        </div>
      )}

      {/* STEP 1: Project & Location */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label htmlFor="projectType" className="block text-sm font-semibold text-[#242824] mb-1.5">
              What would you like to improve? <span className="text-red-600">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={projectType}
              onChange={(e) => {
                setProjectType(e.target.value);
              }}
              className="w-full px-4 py-3 border border-[#DDE2DF] rounded-xl text-[#242824] bg-[#F7F6F1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173D35] min-h-[48px]"
              required
            >
              {siteConfig.services.map((svc) => (
                <option key={svc.id} value={svc.name}>
                  {svc.name}
                </option>
              ))}
              <option value="Other Home Improvement">Other Home Improvement</option>
            </select>
            {errors.projectType && (
              <p className="text-xs text-red-600 mt-1">{errors.projectType}</p>
            )}
          </div>

          <div>
            <label htmlFor="zipCode" className="block text-sm font-semibold text-[#242824] mb-1.5">
              Your 5-Digit ZIP Code <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              inputMode="numeric"
              maxLength={5}
              placeholder="e.g. 19406"
              value={zipCode}
              onChange={(e) => {
                setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5));
              }}
              aria-invalid={!!errors.zipCode}
              aria-describedby={errors.zipCode ? "zip-error" : undefined}
              className={`w-full px-4 py-3 border rounded-xl text-[#242824] bg-[#F7F6F1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173D35] min-h-[48px] ${
                errors.zipCode ? "border-red-500" : "border-[#DDE2DF]"
              }`}
              required
            />
            {errors.zipCode && (
              <p id="zip-error" className="text-xs text-red-600 mt-1">
                {errors.zipCode}
              </p>
            )}
            <p className="text-xs text-[#58645E] mt-1">
              Used to match you with available installation crews in your local area.
            </p>
          </div>

          <div>
            <label htmlFor="projectDescription" className="block text-sm font-semibold text-[#242824] mb-1.5">
              Brief Project Notes <span className="text-xs font-normal text-[#58645E]">(Optional)</span>
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              rows={2}
              placeholder="Tell us what you'd like to achieve (e.g., replace old tub with walk-in shower, replace drafty sills)..."
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="w-full px-4 py-2.5 border border-[#DDE2DF] rounded-xl text-[#242824] bg-[#F7F6F1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173D35]"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-[#173D35] hover:bg-[#102B25] text-white font-bold py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 min-h-[48px] shadow-sm cursor-pointer"
          >
            Continue to Next Step
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* STEP 2: Contact Information */}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-[#242824] mb-1.5">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              autoComplete="name"
              placeholder="First and Last Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "name-error" : undefined}
              className={`w-full px-4 py-3 border rounded-xl text-[#242824] bg-[#F7F6F1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173D35] min-h-[48px] ${
                errors.fullName ? "border-red-500" : "border-[#DDE2DF]"
              }`}
              required
            />
            {errors.fullName && (
              <p id="name-error" className="text-xs text-red-600 mt-1">
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#242824] mb-1.5">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="(555) 000-0000"
                value={phone}
                onChange={handlePhoneChange}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`w-full px-4 py-3 border rounded-xl text-[#242824] bg-[#F7F6F1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173D35] min-h-[48px] ${
                  errors.phone ? "border-red-500" : "border-[#DDE2DF]"
                }`}
                required
              />
              {errors.phone && (
                <p id="phone-error" className="text-xs text-red-600 mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#242824] mb-1.5">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-3 border rounded-xl text-[#242824] bg-[#F7F6F1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173D35] min-h-[48px] ${
                  errors.email ? "border-red-500" : "border-[#DDE2DF]"
                }`}
                required
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-red-600 mt-1">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredContactMethod" className="block text-sm font-semibold text-[#242824] mb-1.5">
                Preferred Contact Method
              </label>
              <select
                id="preferredContactMethod"
                name="preferredContactMethod"
                value={preferredContactMethod}
                onChange={(e) => setPreferredContactMethod(e.target.value as "phone" | "email" | "text")}
                className="w-full px-4 py-3 border border-[#DDE2DF] rounded-xl text-[#242824] bg-[#F7F6F1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173D35] min-h-[48px]"
              >
                <option value="phone">Phone Call</option>
                <option value="text">SMS / Text Message</option>
                <option value="email">Email</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferredConsultationDate" className="block text-sm font-semibold text-[#242824] mb-1.5">
                Target Date / Timeframe <span className="text-xs font-normal text-[#58645E]">(Optional)</span>
              </label>
              <input
                type="text"
                id="preferredConsultationDate"
                name="preferredConsultationDate"
                placeholder="e.g. Next week, Weekday mornings"
                value={preferredConsultationDate}
                onChange={(e) => setPreferredConsultationDate(e.target.value)}
                className="w-full px-4 py-3 border border-[#DDE2DF] rounded-xl text-[#242824] bg-[#F7F6F1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173D35] min-h-[48px]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="streetAddress" className="block text-sm font-semibold text-[#242824] mb-1.5">
              Street Address <span className="text-xs font-normal text-[#58645E]">(Optional)</span>
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              autoComplete="street-address"
              placeholder="123 Main St"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              className="w-full px-4 py-3 border border-[#DDE2DF] rounded-xl text-[#242824] bg-[#F7F6F1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173D35] min-h-[48px]"
            />
          </div>

          {/* Consent Checkboxes */}
          <div className="pt-2 space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consultationConsent}
                onChange={(e) => setConsultationConsent(e.target.checked)}
                className="mt-1 w-4 h-4 text-[#173D35] border-[#DDE2DF] rounded focus:ring-[#173D35] accent-[#173D35]"
                required
              />
              <span className="text-xs text-[#58645E] leading-relaxed">
                <strong className="text-[#242824]">Required:</strong> I authorize HavenCraft Home Improvement to contact me via phone, text, or email regarding my estimate inquiry at the numbers provided. Standard message rates may apply.
              </span>
            </label>
            {errors.consultationConsent && (
              <p className="text-xs text-red-600 pl-7">{errors.consultationConsent}</p>
            )}

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={marketingConsent}
                onChange={(e) => setMarketingConsent(e.target.checked)}
                className="mt-1 w-4 h-4 text-[#173D35] border-[#DDE2DF] rounded focus:ring-[#173D35] accent-[#173D35]"
              />
              <span className="text-xs text-[#58645E] leading-relaxed">
                (Optional) Keep me informed of seasonal maintenance checklists, remodeling planning guides, and company updates.
              </span>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="py-3 px-5 border border-[#DDE2DF] hover:bg-gray-50 text-[#58645E] rounded-xl text-sm font-semibold transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#173D35] hover:bg-[#102B25] disabled:bg-gray-400 text-white font-bold py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 min-h-[48px] shadow-md cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Saving Estimate Request...
                </>
              ) : (
                "GET MY FREE ESTIMATE"
              )}
            </button>
          </div>

          <p className="text-[11px] text-center text-[#58645E] pt-2">
            We respect your privacy. We never sell your data to third parties. View our{" "}
            <a href="/privacy-policy" className="underline hover:text-[#173D35]">
              Privacy Policy
            </a>.
          </p>
        </div>
      )}
    </form>
  );
}
