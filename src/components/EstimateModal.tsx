"use client";

import React, { useState, useEffect, useCallback } from "react";
import { X, ShieldCheck } from "lucide-react";
import EstimateForm from "./EstimateForm";

export function openEstimateModal(projectType?: string) {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("open-estimate-modal", { detail: { projectType } });
    window.dispatchEvent(event);
  }
}

export default function EstimateModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectType, setProjectType] = useState<string>("");

  const handleOpen = useCallback((e: Event) => {
    const customEvent = e as CustomEvent<{ projectType?: string }>;
    if (customEvent.detail?.projectType) {
      setProjectType(customEvent.detail.projectType);
    }
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("open-estimate-modal", handleOpen);
    return () => window.removeEventListener("open-estimate-modal", handleOpen);
  }, [handleOpen]);

  // Handle ESC key and body lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        className="fixed inset-0"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8 border border-[#DDE2DF]">
        {/* Header */}
        <div className="bg-[#173D35] text-white px-6 sm:px-8 py-5 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#F3D8A0] uppercase block">
              Free Consultation & Estimate
            </span>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold">
              {projectType ? `Plan Your ${projectType}` : "Request Your In-Home Estimate"}
            </h2>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close estimate dialog"
            className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 bg-[#F7F6F1]">
          <div className="flex items-center gap-2 text-xs text-[#58645E] mb-4 bg-white px-4 py-2.5 rounded-xl border border-[#DDE2DF]">
            <ShieldCheck className="w-4 h-4 text-[#173D35] flex-shrink-0" />
            <span>
              Accurate, transparent scoping. No obligation and no high-pressure sales pitches.
            </span>
          </div>

          <EstimateForm
            initialProjectType={projectType}
            sourcePage="modal_dialog"
            onSuccess={() => {
              // keep open so user can review the reference number
            }}
          />
        </div>
      </div>
    </div>
  );
}
