# Anvaya Dental Studio - Workspace Rules & Design System

## DESIGN SYSTEM (final, do not change)
Colors (define as CSS variables / tailwind tokens, never hardcode):
- bg #F7F2EA (cream)
- surface #EFE7DA
- text #1F2A24
- primary #1F4D3F (deep forest green)
- accent #C8643C (terracotta)
- muted #8A8F86

Fonts (Google Fonts):
- headings: Fraunces (serif, large, tight leading)
- body: Instrument Sans

Type scale:
- hero: 72-96px desktop / 44px mobile
- h2: 48px / 32px
- body: 17px

Shape:
- radius: 20px on images (use arch-shaped image masks as a signature motif)
- 999px on buttons
- No heavy shadows; use 1px borders in text color at 12% opacity (`rgba(31, 42, 36, 0.12)`)

Layout:
- 12-col grid, generous whitespace
- 120px section padding desktop / 72px mobile
- asymmetric compositions

Motion (Framer Motion):
- easing: [0.22, 1, 0.36, 1], 600-800ms
- Hero headline reveals line by line
- Sections fade up 24px on scroll once
- Hover = underline draw or subtle image scale 1.03
- Respect prefers-reduced-motion

---

## BANNED (hard rules)
- Purple or blue gradients, glassmorphism, gradient blobs/orbs
- Inter, Roboto, Poppins, Montserrat
- Emoji or generic icon-in-circle patterns as decoration
- 3-equal-cards grids, centered-everything layouts, identical section structure repeated
- Words: revolutionize, elevate, seamless, cutting-edge, state-of-the-art, "smile journey", "unlock"
- Default medical blue + white look

---

## GOVERNANCE & TECH LEAD PRINCIPLES
- Keep components in `/components`, content in `/content/site.ts`, tokens in one place.
- All copy must be real, believable Indian clinic context (Kanpur, Dr. bio, Indian patient names, INR pricing hints like "Consultation from Rs. 300"). No lorem ipsum.
- Never use AI slop. Hand-designed boutique studio feel.
