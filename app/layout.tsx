import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Anvaya Dental Studio | Civil Lines, Kanpur",
  description:
    "Dentistry that feels unhurried. Gentle, conservative oral healthcare led by Dr. Ananya Mishra in Civil Lines, Kanpur. Private 45-minute appointments, transparent pricing, and European sterilisation standards.",
  keywords: [
    "Dental Clinic Kanpur",
    "Dentist Civil Lines Kanpur",
    "Root Canal Kanpur",
    "Clear Aligners Kanpur",
    "Teeth Whitening Kanpur",
    "Pediatric Dentist Kanpur",
    "Dr Ananya Mishra",
  ],
  authors: [{ name: "Anvaya Dental Studio" }],
  openGraph: {
    title: "Anvaya Dental Studio • Unhurried Dentistry in Kanpur",
    description:
      "Gentle diagnostic oral healthcare for families in Civil Lines, Kanpur. Consultation from ₹300.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrumentSans.variable}`}>
      <body className="bg-bg text-text antialiased selection:bg-primary/10 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
