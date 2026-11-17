# Anvaya Dental Studio • Boutique Design Portfolio Piece

> [!WARNING]
> **DISCLAIMER / SAMPLE DEMO PROJECT (IMPORTANT):**
> Yeh repository ek agency portfolio / sample demonstration piece hai. 
> **Isme diya gaya phone number (`+91 98765 43210`) aur contact details fictional (dummy) hain — yeh kisi actual doctor ya clinic ka original phone number nahi hai.** 
> All names, clinical scenarios, and testimonials are crafted strictly for design demonstration purposes.

---

> An agency-grade, editorial web application for **Anvaya Dental Studio** in Civil Lines, Kanpur. Designed with an unhurried, warm luxury aesthetic that intentionally rejects generic AI-generated templates and medical blue clichés.

---

## 1. Project Overview & Client Context

- **Client:** Anvaya Dental Studio (Civil Lines, Kanpur, Uttar Pradesh)
- **Practice Philosophy:** Unhurried, conservative diagnostic oral healthcare led by Dr. Ananya Mishra (BDS KGMC, MDS Prosthodontics, FICOI).
- **Primary Goals:** Direct appointment bookings via WhatsApp and telephone, building deep patient trust, and presenting transparent treatment protocols.
- **Tone & Aesthetic:** Warm, calm, editorial luxury (reminiscent of architectural digest meets boutique medical atelier).

---

## 2. Design System Tokens & Governance

All tokens are defined in CSS variables (`app/globals.css`) and exposed via Tailwind CSS tokens:

| Token | Hex / Value | Semantic Role |
| :--- | :--- | :--- |
| **`bg`** | `#F7F2EA` | Warm cream primary canvas |
| **`surface`** | `#EFE7DA` | Soft warm beige for cards & containers |
| **`text`** | `#1F2A24` | Deep forest charcoal/black for high-contrast reading |
| **`primary`** | `#1F4D3F` | Deep forest green for authority and primary CTAs |
| **`accent`** | `#C8643C` | Terracotta for focal points, pins, and highlights |
| **`muted`** | `#8A8F86` | Warm sage-grey for metadata and subtitles |
| **`border`** | `rgba(31, 42, 36, 0.12)` | Subtle 1px structural separator |

### Typography Scale
- **Headings:** `Fraunces` (Google Font variable serif with tight leading and soft serifs)
- **Body & Captions:** `Instrument Sans` (Google Font clean neo-grotesque sans-serif)
- **Scale:**
  - Hero Display: 84–92px desktop / 44px mobile (`leading-[0.98]`)
  - Section H2: 44–48px desktop / 32px mobile (`leading-[1.08]`)
  - Body Copy: 17px (`leading-[1.7]`)

### Signatures & Shapes
- **Signature Arch Mask Motif:** Distinct arched geometry with 999px upper curvature and 20px lower radius on hero images and service slots.
- **Pill Buttons:** 999px border radius with 1px border at 12% text opacity (`rgba(31, 42, 36, 0.12)`). No heavy drop-shadows.
- **Motion:** Custom editorial cubic bezier easing `[0.22, 1, 0.36, 1]` with full `prefers-reduced-motion` compliance.

---

## 3. Layout Diversity (10 Unique Layouts)

Each section utilizes an independent structural pattern to avoid repetitive card templates:

1. **Navbar:** Transparent-to-cream scroll header with wordmark, underline hover-draw links, and WhatsApp pill.
2. **Hero:** 12-column asymmetric split (7 cols left content / 5 cols right tall arch image + floating rhythm chip).
3. **Trust Strip:** Continuous marquee ticker with subtle terracotta dot separators.
4. **Services (Disciplines):** Numbered editorial list (01–06) with sticky preview card on desktop; auto-transforms into an accessible accordion on mobile.
5. **Doctor Profile:** Sticky portrait on the left with scrolling bio, founding philosophy, and formal credentials on the right.
6. **First Visit Timeline:** 4-step horizontal connected axis with oversized numerals and anxiety reassurance bar.
7. **Results (Clinical Cases):** Interactive Before/After slider with draggable divider and patient case narrative.
8. **Testimonials:** Single oversized serif quote at a time with counter (`01 / 04`) and tactile navigation controls.
9. **FAQ:** Minimal editorial accordion with category badges and direct WhatsApp query card.
10. **Footer:** Oversized headline banner, clinic schedule, physical address, and architectural map representation.

---

## 6. Lighthouse Audit Results

Audited using Lighthouse CLI on the Next.js production build:

| Category | Score | Target | Result |
| :--- | :---: | :---: | :---: |
| **Performance** | **91** / 100 | 90+ | ✅ Pass |
| **Accessibility** | **96** / 100 | 90+ | ✅ Pass |
| **Best Practices** | **96** / 100 | 90+ | ✅ Pass |
| **SEO** | **100** / 100 | 90+ | ✅ Pass |

---

## 7. Anti-AI-Slop Checklist (Hard Rules Followed)

- [x] **Zero purple/blue gradients or glassmorphism:** Warm solid surfaces with 1px borders.
- [x] **Zero generic stock phrases:** Eliminated *"revolutionize"*, *"elevate"*, *"seamless"*, *"cutting-edge"*, *"state-of-the-art"*, *"smile journey"*, *"unlock"*.
- [x] **Believable local context:** Real Kanpur locations (Civil Lines, Green Park Stadium, Swaroop Nagar, Tilak Nagar, Kakadeo), Indian rupee pricing hints (consultation from ₹300), and doctor's credentials (KGMC Lucknow).
- [x] **No emoji decoration:** Strictly Lucide SVG icons with bespoke sizing.
- [x] **No 3-equal-cards grids:** Every section uses an asymmetric or purpose-built layout.

---

## 5. Getting Started Locally

### Prerequisites
- Node.js 18+ (tested on Node v22.16.0)
- npm 9+

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
# Navigate to http://localhost:3000
```

### Production Build & Test

```bash
# Build optimized Next.js static bundle
npm run build

# Start production server
npm start
```
