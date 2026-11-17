"use client";

import { siteContent } from "@/content/site";

export function TrustStrip() {
  // Duplicate array to create a seamless infinite loop
  const items = [...siteContent.trustStrip, ...siteContent.trustStrip];

  return (
    <section
      aria-label="Clinical Standards and Guarantees"
      className="relative overflow-hidden bg-surface border-y border-[rgba(31,42,36,0.12)] py-5"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {items.map((fact, index) => (
          <div
            key={`${fact}-${index}`}
            className="flex items-center shrink-0 mx-6 text-[13px] md:text-[14px] font-medium tracking-[0.14em] uppercase text-text/80"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent/80 mr-6 shrink-0" />
            <span>{fact}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
