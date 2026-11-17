import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <Hero />
    </main>
  );
}
