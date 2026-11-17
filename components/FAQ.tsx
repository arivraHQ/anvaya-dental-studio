"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/content/site";
import { Plus, Minus, MessageCircle } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-32 bg-surface/40 border-t border-[rgba(31,42,36,0.12)] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Direct Inquiries (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <div>
              <span className="text-[12px] font-medium tracking-[0.2em] uppercase text-accent block mb-3">
                Transparent Guidance
              </span>
              <h2 className="font-serif text-[34px] sm:text-[44px] leading-[1.08] text-text font-normal">
                Clear answers before you take a seat.
              </h2>
              <p className="text-[16px] text-text/75 mt-4 leading-relaxed">
                We believe anxious patients feel calmer when costs, pain protocols, and appointment schedules are completely open.
              </p>
            </div>

            {/* Direct Question Card */}
            <div className="p-6 rounded-2xl bg-bg border border-[rgba(31,42,36,0.12)] space-y-3">
              <span className="font-serif text-lg text-text font-medium block">
                Have a specific clinical question?
              </span>
              <p className="text-[14px] text-text/75 leading-relaxed">
                Dr. Mishra or our senior nurse answers clinical queries directly on WhatsApp during clinic hours.
              </p>
              <div className="pt-2">
                <a
                  href={siteContent.brand.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-primary hover:text-accent transition-colors hover-draw-line"
                >
                  <MessageCircle className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  <span>Send a confidential question</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Accordion (Cols 6-12) */}
          <div className="lg:col-span-7 divide-y divide-[rgba(31,42,36,0.12)] border-y border-[rgba(31,42,36,0.12)]">
            {siteContent.faq.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-6 transition-colors duration-200">
                  <button
                    type="button"
                    onClick={() => toggleIndex(index)}
                    className="w-full text-left flex items-start justify-between gap-6 focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-accent block mb-1">
                        {item.category}
                      </span>
                      <h3
                        className={`font-serif text-xl sm:text-2xl transition-colors duration-200 ${
                          isOpen ? "text-primary font-medium" : "text-text group-hover:text-primary"
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full border border-[rgba(31,42,36,0.12)] flex items-center justify-center shrink-0 mt-1 transition-all duration-300 ${
                        isOpen ? "bg-primary text-[#F7F2EA] border-primary" : "bg-bg text-text/80 group-hover:border-primary"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" strokeWidth={1.75} />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={1.75} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-[15px] sm:text-[16px] leading-[1.7] text-text/80 max-w-2xl">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
