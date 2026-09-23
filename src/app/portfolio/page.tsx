import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Kept reachable by direct link only: unlinked from the site and noindex.
export const metadata: Metadata = {
  title: "AppScales · Building and scaling apps",
  robots: { index: false, follow: false },
};

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
