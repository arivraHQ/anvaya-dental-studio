"use client";

import { siteContent } from "@/content/site";
import { ArrowUpRight, Phone, Clock, MapPin, Navigation, ShieldCheck } from "lucide-react";

export function Footer() {
  const { brand, footer } = siteContent;

  return (
    <footer
      id="contact"
      className="bg-[#1F2A24] text-[#F7F2EA] pt-20 lg:pt-32 pb-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top: Oversized CTA Headline */}
        <div className="border-b border-white/10 pb-16 lg:pb-24">
          <div className="max-w-4xl">
            <span className="text-[12px] font-medium tracking-[0.2em] uppercase text-accent block mb-4">
              Begin Your Visit
            </span>
            <h2 className="font-serif text-[38px] sm:text-[54px] lg:text-[68px] leading-[1.02] font-normal tracking-tight">
              {footer.heroHeading}
            </h2>
            <p className="text-[17px] text-[#F7F2EA]/75 mt-6 max-w-xl leading-relaxed">
              {footer.subheading} Private appointments ensure you never wait in a crowded clinic lobby.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10">
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-pill bg-primary text-[#F7F2EA] text-[15px] font-medium tracking-wide hover:bg-[#2B6353] transition-colors border border-primary-light/30"
              >
                <span>{footer.whatsappCta}</span>
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
              </a>

              <a
                href={brand.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-pill border border-white/15 bg-white/5 hover:bg-white/10 text-[#F7F2EA] text-[15px] font-medium tracking-wide transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" strokeWidth={1.75} />
                <span>Call {brand.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Middle: 3-Column Info + Google Maps Embed Placeholder */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-white/10">
          
          {/* Col 1: Clinic Hours (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-accent text-[12px] uppercase tracking-wider font-medium">
              <Clock className="w-4 h-4" strokeWidth={1.75} />
              <span>{footer.timingsHeading}</span>
            </div>
            <div className="space-y-3 text-[15px] text-[#F7F2EA]/85">
              <div>
                <p className="font-medium text-white">Monday to Saturday</p>
                <p className="text-[#F7F2EA]/70 mt-0.5">9:30 AM – 7:30 PM</p>
              </div>
              <div>
                <p className="font-medium text-white">Sunday</p>
                <p className="text-[#F7F2EA]/70 mt-0.5">10:00 AM – 1:30 PM (Prior Appointment)</p>
              </div>
            </div>
            <div className="pt-2 text-[12px] text-accent/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{footer.emergencyNote}</span>
            </div>
          </div>

          {/* Col 2: Address & Location (Cols 5-8) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-accent text-[12px] uppercase tracking-wider font-medium">
              <MapPin className="w-4 h-4" strokeWidth={1.75} />
              <span>{footer.addressHeading}</span>
            </div>
            <div className="space-y-2 text-[15px] text-[#F7F2EA]/85">
              <p className="font-medium text-white">{brand.name}</p>
              <p className="text-[#F7F2EA]/75 leading-relaxed">
                {brand.addressLine1}
                <br />
                {brand.addressLine2}
              </p>
              <p className="text-[13px] text-accent pt-1">
                Landmark: {footer.landmark}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={brand.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#F7F2EA] hover:text-accent transition-colors hover-draw-line"
              >
                <Navigation className="w-3.5 h-3.5 text-accent" strokeWidth={1.75} />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Col 3: Architectural Map Placeholder (Cols 9-12) */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 h-full flex flex-col justify-between overflow-hidden group">
              
              {/* Map Illustration SVG */}
              <div className="relative w-full h-36 rounded-xl bg-[#16211B] border border-white/10 overflow-hidden flex items-center justify-center">
                {/* Street Grid SVG */}
                <svg viewBox="0 0 320 160" className="w-full h-full opacity-40" fill="none">
                  {/* Road Network Lines */}
                  <line x1="0" y1="40" x2="320" y2="40" stroke="#F7F2EA" strokeWidth="2" />
                  <line x1="0" y1="110" x2="320" y2="110" stroke="#F7F2EA" strokeWidth="3" />
                  <line x1="80" y1="0" x2="80" y2="160" stroke="#F7F2EA" strokeWidth="2" />
                  <line x1="220" y1="0" x2="220" y2="160" stroke="#F7F2EA" strokeWidth="2" />
                  <path d="M120 40C160 40 180 80 220 110" stroke="#F7F2EA" strokeWidth="2" />
                  
                  {/* Green Park Stadium Landmark block */}
                  <rect x="235" y="15" width="70" height="70" rx="8" fill="#1F4D3F" fillOpacity="0.4" stroke="#1F4D3F" strokeWidth="1" />
                  <text x="270" y="55" fill="#F7F2EA" fontSize="8" textAnchor="middle" opacity="0.8">Green Park</text>

                  {/* Studio Pin Marker */}
                  <circle cx="150" cy="75" r="16" fill="#C8643C" fillOpacity="0.25" />
                  <circle cx="150" cy="75" r="7" fill="#C8643C" />
                </svg>

                {/* Studio Pin Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="font-serif text-[13px] text-white font-medium bg-[#1F2A24]/90 px-3 py-1 rounded-pill border border-accent/40 shadow-sm">
                    Anvaya Studio • Civil Lines
                  </span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-[12px] text-[#F7F2EA]/75">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" strokeWidth={1.75} />
                  <span>Free Valet Parking</span>
                </span>
                <a
                  href={brand.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Professional Credentials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#F7F2EA]/60">
          <div>
            <p>© {new Date().getFullYear()} Anvaya Dental Studio. All rights reserved.</p>
            <p className="text-[11px] text-white/40 mt-0.5">
              Portfolio Demo Piece • UPDC-11482 • European Class-B Sterilised Practice
            </p>
            <p className="text-[11px] text-accent/80 mt-1">
              *Disclaimer: Sample demonstration project. Contact numbers & doctor profiles are fictional placeholders.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[12px] text-white/50">
              Designed as a boutique studio portfolio piece
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
