"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/site";
import { ArrowUpRight, Phone, Star, Clock, ShieldCheck } from "lucide-react";

const easeEditorial = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const lineVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: custom * 0.12,
        ease: easeEditorial,
      },
    }),
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-28 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* 12-Column Asymmetric Grid: 7 cols left, 5 cols right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Location & Legacy Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeEditorial }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill border border-[rgba(31,42,36,0.12)] bg-surface/70 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[12px] font-medium tracking-wide text-text/80">
                {siteContent.hero.badge}
              </span>
            </motion.div>

            {/* Headline - Line by Line Reveal */}
            <h1 className="font-serif font-normal tracking-tight text-text text-[44px] leading-[1.05] sm:text-[64px] sm:leading-[1.02] lg:text-[84px] lg:leading-[0.98] xl:text-[92px] mb-8">
              <motion.span
                custom={1}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block"
              >
                Dentistry that feels
              </motion.span>
              <motion.span
                custom={2}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block italic text-primary"
              >
                calm & unhurried.
              </motion.span>
            </h1>

            {/* Subtext */}
            <motion.p
              custom={3}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-[17px] leading-[1.7] text-text/80 max-w-xl mb-10"
            >
              {siteContent.hero.subtext}
            </motion.p>

            {/* Two CTAs */}
            <motion.div
              custom={4}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <a
                href={siteContent.hero.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-pill bg-primary text-[#F7F2EA] text-[15px] font-medium tracking-wide transition-all duration-300 hover:bg-[#16382E] active:scale-[0.99] border border-primary"
              >
                <span>{siteContent.hero.primaryCta.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-90" strokeWidth={1.75} />
              </a>

              <a
                href={siteContent.hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-pill border border-[rgba(31,42,36,0.12)] bg-surface/40 hover:bg-surface text-text text-[15px] font-medium tracking-wide transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-accent" strokeWidth={1.75} />
                <span>{siteContent.hero.secondaryCta.label}</span>
              </a>
            </motion.div>

            {/* Small Trust Line */}
            <motion.div
              custom={5}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="pt-6 border-t border-[rgba(31,42,36,0.12)] w-full flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-text/75"
            >
              <div className="flex items-center gap-2">
                <span className="flex text-accent">
                  <Star className="w-3.5 h-3.5 fill-accent" strokeWidth={0} />
                </span>
                <span className="font-medium text-text">4.9 / 5</span>
                <span className="text-muted">(680+ Kanpur families)</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-primary" strokeWidth={1.75} />
                <span>12+ Years in Civil Lines</span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" strokeWidth={1.75} />
                <span>Consultation from ₹300</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column (Cols 8-12) - Tall Arch-Masked Image with Floating Info Chip */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: easeEditorial }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Image Brief: Warm natural sunlight pouring through tall arched studio window onto clean oak wooden finishes; gentle dental chair visible in soft focus; relaxed patient conversing with doctor in cream coat; authentic warm Kodachrome grading, no cold blues. */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[3/4] lg:h-[580px] lg:w-[410px]">
              
              {/* Arch Mask Container */}
              <div className="arch-mask w-full h-full border border-[rgba(31,42,36,0.12)] bg-[#EFE7DA] relative overflow-hidden group">
                
                {/* Visual Art Direction Representation */}
                <div className="absolute inset-0 bg-[#EFE7DA] flex flex-col justify-between p-8">
                  
                  {/* Subtle architectural sunlight arches inside */}
                  <svg
                    viewBox="0 0 400 560"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    aria-label="Artistic architectural illustration of Anvaya Dental Studio sunlit consultation room"
                  >
                    {/* Cream Warm Background */}
                    <rect width="400" height="560" fill="#EFE7DA" />
                    
                    {/* Architectural Arched Window Sill */}
                    <path
                      d="M60 560V220C60 142.68 122.68 80 200 80C277.32 80 340 142.68 340 220V560"
                      fill="#F7F2EA"
                      stroke="rgba(31, 42, 36, 0.12)"
                      strokeWidth="1.5"
                    />

                    {/* Inner Arch Glazing Line */}
                    <path
                      d="M84 560V232C84 167.935 135.935 116 200 116C264.065 116 316 167.935 316 232V560"
                      stroke="rgba(31, 42, 36, 0.08)"
                      strokeWidth="1"
                    />

                    {/* Window Mullions */}
                    <line x1="200" y1="116" x2="200" y2="560" stroke="rgba(31, 42, 36, 0.08)" strokeWidth="1" />
                    <line x1="84" y1="280" x2="316" y2="280" stroke="rgba(31, 42, 36, 0.08)" strokeWidth="1" />
                    <line x1="84" y1="410" x2="316" y2="410" stroke="rgba(31, 42, 36, 0.08)" strokeWidth="1" />

                    {/* Warm Terracotta Sunlight Cast */}
                    <path
                      d="M120 560L260 200L320 280L210 560H120Z"
                      fill="#C8643C"
                      fillOpacity="0.06"
                    />

                    {/* Forest Green Botanical / Studio Touch */}
                    <path
                      d="M340 480C310 440 280 430 260 445C240 460 245 490 270 515C295 540 330 550 340 560"
                      fill="#1F4D3F"
                      fillOpacity="0.12"
                    />
                    <path
                      d="M330 420C305 385 275 380 260 395C245 410 250 435 275 455C300 475 325 480 335 488"
                      fill="#1F4D3F"
                      fillOpacity="0.18"
                    />

                    {/* Soft Ceramic Vase Silhouette */}
                    <path
                      d="M120 560V500C120 480 140 465 140 445C140 430 132 420 132 410H158C158 420 150 430 150 445C150 465 170 480 170 500V560H120Z"
                      fill="#C8643C"
                      fillOpacity="0.16"
                    />

                    {/* Clean Minimalist Chair Line */}
                    <path
                      d="M190 490C190 440 220 410 255 410C280 410 295 425 295 445C295 470 280 490 260 515L235 560"
                      stroke="#1F4D3F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeOpacity="0.3"
                    />
                  </svg>

                  {/* Studio Scene Label Overlay */}
                  <div className="relative z-10 w-full text-center pt-20 px-8">
                    <span className="font-serif italic text-base text-text/80 block">
                      The Consultation Lounge
                    </span>
                    <p className="text-[11px] text-muted tracking-widest uppercase mt-0.5">
                      Civil Lines Practice
                    </p>
                  </div>

                  <div className="relative z-10 self-end text-right pb-4 pr-4">
                    <span className="text-[10px] font-medium tracking-widest uppercase text-primary/70">
                      Private Suite 01
                    </span>
                  </div>
                </div>

                {/* Subtle bottom gradient tint using natural tones */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Info Chip - bottom-left overlap */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55, ease: easeEditorial }}
                className="absolute -bottom-6 -left-4 sm:-bottom-6 sm:-left-6 bg-[#F7F2EA] border border-[rgba(31,42,36,0.12)] rounded-2xl p-4 sm:p-5 max-w-[240px]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-muted font-medium block">
                      {siteContent.hero.floatingChip.label}
                    </span>
                    <p className="font-serif text-[15px] text-text font-medium leading-snug mt-0.5">
                      {siteContent.hero.floatingChip.value}
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
