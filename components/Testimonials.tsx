"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/content/site";
import { ArrowLeft, ArrowRight, MapPin, Sparkles } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = siteContent.testimonials;
  const current = items[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 bg-bg border-t border-[rgba(31,42,36,0.12)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Counter & Navigation (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8">
            <div>
              <span className="text-[12px] font-medium tracking-[0.2em] uppercase text-accent block mb-3">
                Patient Voices
              </span>
              <h2 className="font-serif text-[34px] sm:text-[42px] leading-[1.1] text-text font-normal">
                Stories from Kanpur families in our care.
              </h2>
              <p className="text-[15px] text-text/75 mt-4 max-w-sm leading-relaxed">
                We measure our work not by the volume of crowns placed, but by the quiet comfort of our patients.
              </p>
            </div>

            {/* Counter + Prev / Next Controls */}
            <div className="pt-4 flex items-center gap-6">
              <div className="font-serif text-lg text-text/80 font-medium">
                <span className="text-accent">0{currentIndex + 1}</span>
                <span className="text-muted mx-1.5">/</span>
                <span>0{items.length}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-pill border border-[rgba(31,42,36,0.15)] flex items-center justify-center hover:bg-surface hover:border-primary text-text transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-4 h-4 text-text/80" strokeWidth={1.75} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-12 h-12 rounded-pill border border-[rgba(31,42,36,0.15)] flex items-center justify-center hover:bg-surface hover:border-primary text-text transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-4 h-4 text-text/80" strokeWidth={1.75} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: One Large Serif Italic Quote (Cols 5-12) */}
          <div className="lg:col-span-8 lg:pl-6 min-h-[320px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                {/* Large Serif Italic Quote Text */}
                <blockquote className="font-serif italic text-[24px] sm:text-[32px] lg:text-[38px] leading-[1.25] text-text font-normal">
                  {current.quote}
                </blockquote>

                {/* Patient Details Attribution */}
                <div className="pt-6 border-t border-[rgba(31,42,36,0.12)] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-text font-normal">
                      {current.author}
                    </h3>
                    <p className="text-[13px] text-muted tracking-wide mt-0.5">
                      {current.relation}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-pill bg-surface border border-[rgba(31,42,36,0.12)] text-[12px] font-medium text-primary">
                      <Sparkles className="w-3.5 h-3.5 text-accent" strokeWidth={1.75} />
                      {current.treatment}
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill bg-[#F7F2EA] border border-[rgba(31,42,36,0.12)] text-[12px] text-muted">
                      <MapPin className="w-3 h-3 text-accent" strokeWidth={1.75} />
                      {current.locality}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
