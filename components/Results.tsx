"use client";

import { useState } from "react";
import { siteContent, ResultCase } from "@/content/site";
import { ArrowLeftRight, Clock, ShieldCheck, User } from "lucide-react";

export function Results() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100

  const activeCase: ResultCase = siteContent.results[activeCaseIndex];

  return (
    <section
      id="results"
      className="py-20 lg:py-32 bg-surface/50 border-t border-[rgba(31,42,36,0.12)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[12px] font-medium tracking-[0.2em] uppercase text-accent block mb-3">
              Clinical Case Documentation
            </span>
            <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[48px] leading-[1.08] text-text font-normal">
              Conservative restorations that honor natural anatomy.
            </h2>
          </div>

          {/* Case Switcher Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-pill bg-bg border border-[rgba(31,42,36,0.12)] self-start md:self-auto">
            {siteContent.results.map((c, idx) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-5 py-2 rounded-pill text-[13px] font-medium transition-all duration-300 ${
                  activeCaseIndex === idx
                    ? "bg-primary text-[#F7F2EA] shadow-none"
                    : "text-text/70 hover:text-text"
                }`}
              >
                Case 0{idx + 1}: {c.tag.split("&")[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Before/After Visual Slider (Cols 1-7) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-image border border-[rgba(31,42,36,0.15)] bg-bg overflow-hidden select-none">
              
              {/* After Layer (Full Underneath) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#F7F2EA]">
                {/* Image Brief: {activeCase.afterPrompt} */}
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 border border-primary/20 rounded-xl bg-surface/30">
                  <span className="px-3.5 py-1 rounded-pill bg-primary/10 text-primary text-[11px] font-medium uppercase tracking-widest mb-3">
                    Result (Post-Treatment)
                  </span>
                  
                  {/* Clean SVG Representation of Restored Dentition */}
                  <svg viewBox="0 0 300 120" className="w-64 max-w-full h-24 my-3" fill="none">
                    <rect x="10" y="30" width="280" height="60" rx="30" fill="#EFE7DA" stroke="#1F4D3F" strokeWidth="1" />
                    {/* Aligned Harmonious Teeth */}
                    <path d="M70 35C70 35 75 75 85 75C95 75 100 35 100 35" fill="#FAF7F2" stroke="#1F4D3F" strokeWidth="1.5" />
                    <path d="M102 35C102 35 108 85 125 85C142 85 148 35 148 35" fill="#FAF7F2" stroke="#1F4D3F" strokeWidth="1.5" />
                    <path d="M152 35C152 35 158 85 175 85C192 85 198 35 198 35" fill="#FAF7F2" stroke="#1F4D3F" strokeWidth="1.5" />
                    <path d="M200 35C200 35 205 75 215 75C225 75 230 35 230 35" fill="#FAF7F2" stroke="#1F4D3F" strokeWidth="1.5" />
                  </svg>

                  <p className="font-serif italic text-text text-sm sm:text-base mt-2">
                    {activeCase.title}
                  </p>
                  <span className="hidden sm:inline-block text-[12px] text-muted mt-1">
                    {activeCase.doctorNote}
                  </span>
                </div>
              </div>

              {/* Before Layer (Clipped via slider position) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden bg-[#EFE7DA] border-r border-[rgba(31,42,36,0.3)] transition-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="absolute inset-0 w-full min-w-[320px] sm:min-w-[620px] flex flex-col items-center justify-center p-8">
                  {/* Image Brief: {activeCase.beforePrompt} */}
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 sm:p-6 border border-accent/20 rounded-xl bg-bg/40">
                    <span className="px-3.5 py-1 rounded-pill bg-accent/15 text-accent text-[11px] font-medium uppercase tracking-widest mb-2 sm:mb-3">
                      Initial (Before)
                    </span>

                    {/* SVG Representation of Chipped / Crowded Dentition */}
                    <svg viewBox="0 0 300 120" className="w-56 sm:w-64 max-w-full h-20 sm:h-24 my-2 sm:my-3" fill="none">
                      <rect x="10" y="30" width="280" height="60" rx="30" fill="#EFE7DA" stroke="#C8643C" strokeWidth="1" />
                      {/* Chipped / Irregular Teeth */}
                      <path d="M70 35C70 35 75 75 85 75C95 75 100 35 100 35" fill="#EAE3D5" stroke="#C8643C" strokeWidth="1.5" />
                      {/* Chipped fracture path */}
                      <path d="M102 35C102 35 108 85 120 70L125 78L132 68C138 72 148 35 148 35" fill="#EAE3D5" stroke="#C8643C" strokeWidth="1.5" />
                      <path d="M152 35C152 35 156 75 168 80L174 65C182 75 198 35 198 35" fill="#EAE3D5" stroke="#C8643C" strokeWidth="1.5" />
                      <path d="M200 35C200 35 205 75 215 75C225 75 230 35 230 35" fill="#EAE3D5" stroke="#C8643C" strokeWidth="1.5" />
                    </svg>

                    <p className="font-serif italic text-text/80 text-sm sm:text-base mt-2">
                      Pre-treatment wear & misalignment
                    </p>
                    <span className="hidden sm:inline-block text-[12px] text-muted mt-1">
                      Pre-clinical photographic record
                    </span>
                  </div>
                </div>
              </div>

              {/* Slider Divider Bar and Handle */}
              <div
                className="absolute inset-y-0 -ml-4 flex items-center justify-center pointer-events-none z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-primary text-[#F7F2EA] flex items-center justify-center border-2 border-bg shadow-sm">
                  <ArrowLeftRight className="w-3.5 h-3.5" strokeWidth={2} />
                </div>
              </div>

              {/* Interactive Range Input Overlay */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Drag to compare before and after treatment photo"
              />

              {/* Instruction Hint */}
              <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none z-20">
                <span className="px-3 py-1 rounded-pill bg-bg/90 border border-[rgba(31,42,36,0.12)] text-[11px] text-text/75 font-medium tracking-wide">
                  Drag slider horizontally to compare
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Case Story & Patient Testimonial Note (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[12px] uppercase tracking-wider text-accent font-medium block">
              Case Summary • {activeCase.tag}
            </span>

            <h3 className="font-serif text-3xl lg:text-4xl text-text font-normal leading-tight">
              {activeCase.title}
            </h3>

            {/* Patient Note Quote */}
            <div className="p-6 rounded-2xl bg-bg border border-[rgba(31,42,36,0.12)] relative">
              <span className="font-serif text-5xl text-accent/30 absolute -top-3 left-4 leading-none">
                “
              </span>
              <p className="font-serif italic text-[17px] leading-relaxed text-text/85 pt-2">
                {activeCase.patientNote}
              </p>
            </div>

            {/* Treatment Specifications */}
            <div className="space-y-3 pt-2 text-[14px]">
              <div className="flex items-center gap-3 text-text/80">
                <Clock className="w-4 h-4 text-primary shrink-0" strokeWidth={1.75} />
                <span><strong className="text-text font-medium">Timeline:</strong> {activeCase.timeframe}</span>
              </div>

              <div className="flex items-start gap-3 text-text/80">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                <span><strong className="text-text font-medium">Clinical Protocol:</strong> {activeCase.doctorNote}</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={siteContent.brand.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium text-primary hover:text-accent transition-colors hover-draw-line"
              >
                Discuss a similar case for yourself →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
