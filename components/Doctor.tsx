"use client";

import { siteContent } from "@/content/site";
import { Check, Award, GraduationCap, Building2, ArrowUpRight } from "lucide-react";

export function Doctor() {
  const { doctor } = siteContent;

  return (
    <section
      id="doctor"
      className="py-20 lg:py-32 bg-surface/50 border-t border-[rgba(31,42,36,0.12)] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Sticky Image on Desktop, Cols 1-5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            {/* Image Brief: {doctor.imageBrief} */}
            <div className="relative">
              {/* Arch Masked Portrait Container */}
              <div className="arch-mask aspect-[3/4] max-h-[580px] w-full bg-[#EFE7DA] border border-[rgba(31,42,36,0.12)] relative overflow-hidden group">
                
                {/* SVG Portrait Graphic & Art Direction Silhouette */}
                <svg
                  viewBox="0 0 400 530"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  aria-label="Illustration portrait of Dr. Ananya Mishra at Anvaya Dental Studio"
                >
                  <rect width="400" height="530" fill="#EFE7DA" />
                  
                  {/* Sunlit Practice Background Arch */}
                  <path
                    d="M50 530V200C50 117.157 117.157 50 200 50C282.843 50 350 117.157 350 200V530"
                    fill="#F7F2EA"
                    stroke="rgba(31, 42, 36, 0.08)"
                    strokeWidth="1.5"
                  />
                  <line x1="200" y1="50" x2="200" y2="530" stroke="rgba(31, 42, 36, 0.06)" strokeWidth="1" />
                  <line x1="50" y1="260" x2="350" y2="260" stroke="rgba(31, 42, 36, 0.06)" strokeWidth="1" />

                  {/* Doctor Figure Silhouette (Warm Sage + Cream Tones) */}
                  {/* Shoulders & Scrub Top */}
                  <path
                    d="M100 530C100 440 140 370 200 370C260 370 300 440 300 530H100Z"
                    fill="#1F4D3F"
                    fillOpacity="0.85"
                  />
                  {/* Tailored Lapel */}
                  <path
                    d="M170 370L200 450L230 370"
                    stroke="#F7F2EA"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Head & Neck */}
                  <circle cx="200" cy="270" r="54" fill="#C8643C" fillOpacity="0.22" />
                  <ellipse cx="200" cy="265" rx="42" ry="50" fill="#EFE7DA" stroke="rgba(31, 42, 36, 0.15)" strokeWidth="1.5" />
                  {/* Gentle Hair Silhouette */}
                  <path
                    d="M152 260C152 210 180 190 200 190C220 190 248 210 248 260C248 280 245 300 242 310C238 290 230 240 200 240C170 240 162 290 158 310C155 300 152 280 152 260Z"
                    fill="#1F2A24"
                    fillOpacity="0.75"
                  />
                  {/* Dental Loupes Accent */}
                  <circle cx="185" cy="265" r="9" stroke="#C8643C" strokeWidth="2" fill="none" />
                  <circle cx="215" cy="265" r="9" stroke="#C8643C" strokeWidth="2" fill="none" />
                  <line x1="194" y1="265" x2="206" y2="265" stroke="#C8643C" strokeWidth="2" />
                </svg>

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 p-6 pb-8 bg-gradient-to-t from-bg via-bg/90 to-transparent">
                  <span className="font-serif text-xl text-text font-medium block">
                    {doctor.name}
                  </span>
                  <span className="text-[12px] text-accent font-medium tracking-wide block mt-0.5">
                    {doctor.degrees}
                  </span>
                  <span className="text-[11px] text-muted uppercase tracking-wider block mt-1">
                    {doctor.clinicRole}
                  </span>
                </div>
              </div>

              {/* Experience Badge - Top Right */}
              <div className="absolute top-6 right-6 bg-[#F7F2EA] text-primary px-4 py-2 rounded-pill border border-[rgba(31,42,36,0.12)] text-[12px] font-medium tracking-wide flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-accent" strokeWidth={2} />
                <span>12+ Years Practice</span>
              </div>
            </div>
          </div>

          {/* Right Column (Scrolling Bio, Philosophy, Credentials, Cols 6-12) */}
          <div className="lg:col-span-7 space-y-12 lg:pl-6">
            
            {/* Header */}
            <div>
              <span className="text-[12px] font-medium tracking-[0.2em] uppercase text-accent block mb-3">
                Lead Clinician & Director
              </span>
              <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[48px] leading-[1.08] text-text font-normal">
                “Care should begin with quiet listening, not dental instruments.”
              </h2>
              <p className="text-[17px] text-text/80 font-medium mt-3">
                {doctor.name}, {doctor.title}
              </p>
            </div>

            {/* Philosophy Points */}
            <div className="space-y-4">
              <span className="text-[12px] font-medium tracking-wider uppercase text-muted block">
                Founding Clinical Principles
              </span>
              <div className="grid grid-cols-1 gap-3.5">
                {doctor.philosophy.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-bg border border-[rgba(31,42,36,0.12)] flex items-start gap-4"
                  >
                    <span className="w-6 h-6 rounded-full bg-surface border border-[rgba(31,42,36,0.12)] text-accent text-[12px] font-serif font-medium flex items-center justify-center shrink-0 mt-0.5">
                      0{index + 1}
                    </span>
                    <p className="text-[15px] leading-relaxed text-text/85">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Bio Paragraphs */}
            <div className="space-y-5 text-[16px] leading-[1.75] text-text/80 border-t border-[rgba(31,42,36,0.12)] pt-8">
              <span className="text-[12px] font-medium tracking-wider uppercase text-muted block -mb-1">
                Background & Practice
              </span>
              {doctor.bioParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Credentials & Memberships */}
            <div className="p-7 rounded-2xl bg-bg border border-[rgba(31,42,36,0.12)] space-y-4">
              <div className="flex items-center gap-2 text-primary font-medium text-[15px]">
                <GraduationCap className="w-5 h-5 text-accent" strokeWidth={1.75} />
                <span>Professional Qualifications & Affiliations</span>
              </div>

              <ul className="space-y-2.5 pt-2 text-[14px] text-text/80">
                {doctor.memberships.map((membership, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={2} />
                    <span>{membership}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-accent shrink-0" strokeWidth={2} />
                  <span>Licensed by Uttar Pradesh Dental Council (Reg. No. 11482)</span>
                </li>
              </ul>
            </div>

            {/* Consultation CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={siteContent.brand.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-pill bg-primary text-[#F7F2EA] text-[15px] font-medium hover:bg-[#16382E] transition-colors"
              >
                <span>Schedule Consultation with Dr. Mishra</span>
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
              </a>

              <span className="text-[13px] text-muted text-center sm:text-left">
                ₹300 comprehensive diagnostic sitting
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
