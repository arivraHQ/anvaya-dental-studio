import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
    </main>
  );
}
