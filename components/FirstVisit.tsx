"use client";

import { siteContent } from "@/content/site";
import { Clock } from "lucide-react";

export function FirstVisit() {
  const { firstVisit } = siteContent;

  return (
    <section
      id="first-visit"
      className="py-20 lg:py-32 bg-bg relative overflow-hidden border-t border-[rgba(31,42,36,0.12)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="text-[12px] font-medium tracking-[0.2em] uppercase text-accent block mb-3">
            Patient Experience
          </span>
          <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[48px] leading-[1.08] text-text font-normal">
            No rushed chairs. What your first appointment looks like.
          </h2>
          <p className="text-[16px] text-text/75 mt-4 max-w-xl">
            {firstVisit.tagline}. We deliberately schedule 45-minute slots so you never feel hurried through diagnostic conversations.
          </p>
        </div>

        {/* 4-Step Horizontal Timeline Grid */}
        <div className="relative">
          {/* Subtle Horizontal Connecting Axis on Desktop */}
          <div className="hidden lg:block absolute top-[52px] inset-x-8 h-[1px] bg-[rgba(31,42,36,0.15)] -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 relative z-10">
            {firstVisit.steps.map((step, index) => (
              <div
                key={step.step}
                className="group flex flex-col justify-between p-7 lg:p-6 rounded-2xl bg-surface/40 hover:bg-surface border border-[rgba(31,42,36,0.12)] transition-colors duration-300 min-h-[340px]"
              >
                <div>
                  {/* Big Numeral + Marker */}
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="font-serif text-5xl lg:text-6xl text-primary font-normal tracking-tight group-hover:text-accent transition-colors duration-300">
                      {step.step}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-[#F7F2EA] border border-[rgba(31,42,36,0.12)] text-[11px] font-medium text-text/75">
                      <Clock className="w-3 h-3 text-accent" strokeWidth={1.75} />
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-text font-normal mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[13px] uppercase tracking-wider text-accent font-medium mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-[15px] leading-relaxed text-text/80">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[rgba(31,42,36,0.08)] mt-6 text-[12px] text-muted flex items-center justify-between">
                  <span>Stage 0{index + 1} of 04</span>
                  <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-accent transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reassurance Callout Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-surface/70 border border-[rgba(31,42,36,0.12)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
            <p className="text-[14px] text-text/85">
              <strong className="font-medium text-text">Visiting with dental anxiety?</strong> Tell our front desk—we provide quiet morning appointments, headphones, and warm herbal tea.
            </p>
          </div>
          <a
            href={siteContent.brand.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-primary hover:text-accent transition-colors shrink-0 hover-draw-line"
          >
            Ask reception on WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
}
