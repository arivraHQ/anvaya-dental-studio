"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent, ServiceItem } from "@/content/site";
import { ArrowUpRight, ChevronDown, Clock, Tag } from "lucide-react";

export function Services() {
  const [activeId, setActiveId] = useState<string>(siteContent.services[0].id);

  const activeService =
    siteContent.services.find((s) => s.id === activeId) || siteContent.services[0];

  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-bg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6">
          <div className="max-w-2xl">
            <span className="text-[12px] font-medium tracking-[0.2em] uppercase text-accent block mb-3">
              Clinical Disciplines
            </span>
            <h2 className="font-serif text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.08] text-text font-normal">
              Conservative care, planned with restraint and clarity.
            </h2>
          </div>
          <p className="text-[16px] text-text/75 max-w-sm leading-relaxed">
            Every procedure is discussed with transparent diagnostics and written cost estimates before any treatment begins.
          </p>
        </div>

        {/* Desktop View: Numbered Editorial List (Cols 1-7) with Dynamic Sticky Preview (Cols 8-12) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Numbered Rows List (Cols 1-7) */}
          <div className="lg:col-span-7 divide-y divide-[rgba(31,42,36,0.12)] border-y border-[rgba(31,42,36,0.12)]">
            {siteContent.services.map((service) => {
              const isActive = service.id === activeId;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveId(service.id)}
                  onClick={() => setActiveId(service.id)}
                  className={`group py-7 cursor-pointer transition-all duration-300 ${
                    isActive ? "pl-4" : "pl-0 hover:pl-2"
                  }`}
                >
                  <div className="flex items-baseline gap-6">
                    <span
                      className={`font-serif text-xl transition-colors duration-300 ${
                        isActive ? "text-accent font-medium" : "text-muted"
                      }`}
                    >
                      {service.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`font-serif text-2xl lg:text-3xl transition-colors duration-300 ${
                            isActive
                              ? "text-primary italic font-medium"
                              : "text-text group-hover:text-primary"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <ArrowUpRight
                          className={`w-5 h-5 transition-all duration-300 ${
                            isActive
                              ? "opacity-100 text-accent translate-x-0"
                              : "opacity-0 -translate-x-2 group-hover:opacity-60 text-muted"
                          }`}
                          strokeWidth={1.75}
                        />
                      </div>

                      <p className="text-[15px] text-text/70 mt-2 line-clamp-1">
                        {service.tagline}
                      </p>

                      <div className="flex items-center gap-6 mt-3 text-[13px] text-muted">
                        <span className="flex items-center gap-1.5 text-text/75 font-medium">
                          <Tag className="w-3.5 h-3.5 text-accent" strokeWidth={1.75} />
                          {service.priceHint}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" strokeWidth={1.75} />
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Editorial Preview Card (Cols 8-12) */}
          <div className="lg:col-span-5 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="bg-surface border border-[rgba(31,42,36,0.12)] rounded-image p-8 flex flex-col justify-between min-h-[500px]"
              >
                <div>
                  {/* Top Arch Image Graphic with Image Brief Comment */}
                  {/* Image Brief: {activeService.imagePrompt} */}
                  <div className="arch-mask w-full h-56 bg-bg border border-[rgba(31,42,36,0.12)] mb-6 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
                    {/* SVG Editorial Illustration for Service */}
                    <div className="w-16 h-16 rounded-full bg-surface border border-[rgba(31,42,36,0.12)] flex items-center justify-center mb-3">
                      <span className="font-serif text-2xl text-accent font-medium">
                        {activeService.number}
                      </span>
                    </div>
                    <span className="font-serif italic text-base text-text/80">
                      {activeService.title}
                    </span>
                    <span className="text-[11px] text-muted uppercase tracking-wider mt-1">
                      Clinical Suite • Anvaya Studio
                    </span>
                    <div className="absolute inset-x-0 bottom-0 py-1.5 bg-surface/80 text-[11px] text-text/60 italic border-t border-[rgba(31,42,36,0.08)]">
                      Art Direction: {activeService.duration} protocol
                    </div>
                  </div>

                  <span className="text-[12px] uppercase tracking-wider text-accent font-medium block mb-1">
                    Treatment Details
                  </span>
                  <h4 className="font-serif text-2xl text-text font-normal mb-3">
                    {activeService.title}
                  </h4>
                  <p className="text-[15px] leading-relaxed text-text/80 mb-6">
                    {activeService.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[rgba(31,42,36,0.12)] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-muted block">
                      Fee Guidance
                    </span>
                    <span className="text-[14px] font-medium text-text">
                      {activeService.priceHint}
                    </span>
                  </div>

                  <a
                    href={siteContent.brand.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-pill bg-primary text-[#F7F2EA] text-[13px] font-medium hover:bg-[#16382E] transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile View: Accordion (Transforms cleanly on mobile screens) */}
        <div className="lg:hidden divide-y divide-[rgba(31,42,36,0.12)] border-y border-[rgba(31,42,36,0.12)]">
          {siteContent.services.map((service) => {
            const isOpen = activeId === service.id;
            return (
              <div key={service.id} className="py-5">
                <button
                  type="button"
                  onClick={() => setActiveId(isOpen ? "" : service.id)}
                  className="w-full text-left flex items-start justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-lg text-accent font-medium">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-text font-normal">
                        {service.title}
                      </h3>
                      <p className="text-[14px] text-text/70 mt-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`p-1.5 rounded-full border border-[rgba(31,42,36,0.12)] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-surface" : "bg-transparent"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-text/75" strokeWidth={1.75} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden pt-4 pb-2"
                    >
                      {/* Image Brief: {service.imagePrompt} */}
                      <div className="arch-mask w-full h-44 bg-surface border border-[rgba(31,42,36,0.12)] mb-4 flex flex-col items-center justify-center p-4 text-center">
                        <span className="font-serif italic text-sm text-text/80">
                          {service.title}
                        </span>
                        <span className="text-[11px] text-muted tracking-wider uppercase mt-1">
                          Standard clinical time: {service.duration}
                        </span>
                      </div>

                      <p className="text-[15px] leading-relaxed text-text/80 mb-4">
                        {service.description}
                      </p>

                      <div className="p-4 rounded-xl bg-surface/70 border border-[rgba(31,42,36,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-muted block">
                            Estimate
                          </span>
                          <span className="text-[13px] font-medium text-text">
                            {service.priceHint}
                          </span>
                        </div>

                        <a
                          href={siteContent.brand.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-pill bg-primary text-[#F7F2EA] text-[13px] font-medium"
                        >
                          <span>Book This Treatment</span>
                          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
