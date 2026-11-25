"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        isScrolled
          ? "bg-[#F7F2EA] border-b border-[rgba(31,42,36,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Wordmark Left */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/25 shrink-0 bg-[#1F4D3F]">
              <Image
                src="/images/anvaya-emblem.png"
                alt="Anvaya Dental Studio emblem"
                width={40}
                height={40}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-serif text-2xl md:text-3xl text-text tracking-tight font-medium">
                Anvaya
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted -mt-0.5 group-hover:text-primary transition-colors">
                Dental Studio • Kanpur
              </span>
            </div>
          </Link>

          {/* 4 Navigation Links */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Main Navigation">
            {siteContent.navigation.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-text/80 hover:text-primary transition-colors duration-300 hover-draw-line"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Right */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={siteContent.brand.phoneHref}
              className="text-[14px] text-text/75 hover:text-primary transition-colors flex items-center gap-1.5 px-3 py-2"
              title="Call Reception"
            >
              <Phone className="w-3.5 h-3.5 text-accent" strokeWidth={1.75} />
              <span>{siteContent.brand.phoneDisplay}</span>
            </a>

            <a
              href={siteContent.brand.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-pill bg-primary text-[#F7F2EA] text-[14px] font-medium tracking-wide transition-all duration-300 hover:bg-[#16382E] active:scale-[0.98] border border-primary"
            >
              <span>Book on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" strokeWidth={1.75} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 text-text rounded-pill border border-[rgba(31,42,36,0.12)] hover:bg-surface transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-text" strokeWidth={1.5} />
            ) : (
              <Menu className="w-5 h-5 text-text" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F7F2EA] border-b border-[rgba(31,42,36,0.12)] px-6 pt-4 pb-8 space-y-6">
          <nav className="flex flex-col gap-4">
            {siteContent.navigation.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif text-text hover:text-primary py-1 border-b border-[rgba(31,42,36,0.06)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={siteContent.brand.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-pill bg-primary text-[#F7F2EA] text-[15px] font-medium tracking-wide hover:bg-[#16382E] transition-colors"
            >
              <span>Book on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
            </a>

            <a
              href={siteContent.brand.phoneHref}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-pill border border-[rgba(31,42,36,0.12)] text-text text-[14px] font-medium bg-surface/50 hover:bg-surface transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" strokeWidth={1.75} />
              <span>Call {siteContent.brand.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
