import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team, {
  founders,
  team,
  type Founder,
  type Member,
} from "@/components/Team";
import StudioHero from "@/components/studio/StudioHero";
import StudioWhy from "@/components/studio/StudioWhy";
import StudioProcess from "@/components/studio/StudioProcess";
import StudioOffers from "@/components/studio/StudioOffers";
import StudioWork from "@/components/studio/StudioWork";
import StudioDesigns from "@/components/studio/StudioDesigns";
import StudioFaq from "@/components/studio/StudioFaq";
import StudioCta from "@/components/studio/StudioCta";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "AppScales Studio · Votre app sans embaucher un seul développeur",
  description:
    "Votre équipe tech, sans embaucher. Prototype en 48h, app livrée en 7 jours, maintenance mensuelle.",
  // Accessible only via direct link — keep it out of search engines.
  robots: { index: false, follow: false },
};

const links = [
  { href: "#methode", label: "Méthode" },
  { href: "#offres", label: "Offres" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#team", label: "Équipe" },
  { href: "#faq", label: "FAQ" },
];

// Studio-specific founder copy; photos, names and links come from Team.
const founderCopy: Record<string, string[]> = {
  Lucas: [
    "Expert en apps mobiles, Flutter & iOS",
    "Des dizaines d'apps mobiles lancées",
    "Pilote le développement et la mise en production de votre app",
  ],
  Adam: [
    "Expert growth & stratégie",
    "A scalé plusieurs apps",
    "Construit la stratégie de lancement et de conversion de votre app",
  ],
};

const studioFounders: Founder[] = founders.map((f) => ({
  ...f,
  location: "Paris",
  bullets: founderCopy[f.name] ?? f.bullets,
}));

// Members from the home roster, with roles mapped to what the client buys.
const studioRoles: Record<string, string> = {
  Théo: "Design UI/UX & prototypes",
  Maya: "Produit & stratégie",
  Viktor: "Développement mobile",
  Sofia: "Conversion & growth",
};

const studioTeam: Member[] = Object.entries(studioRoles).flatMap(
  ([name, role]) => {
    const m = team.find((t) => t.name === name);
    return m ? [{ ...m, role, school: undefined }] : [];
  }
);

export default function Services() {
  return (
    <>
      <Navbar
        links={links}
        cta={{ href: whatsappUrl(), label: "WhatsApp" }}
        homeHref="/services"
      />
      <main className="flex-1">
        <StudioHero />
        <StudioWhy />
        <StudioProcess />
        <StudioOffers />
        <StudioWork />
        <StudioDesigns />
        <Team
          label="// 006 · Qui sommes-nous"
          title={
            <>
              Qui sommes-<span className="italic text-accent">nous ?</span>
            </>
          }
          intro="Des dizaines d'apps lancées, plusieurs apps scalées. Une équipe design, tech et growth qui conçoit, développe et fait grandir votre app."
          founders={studioFounders}
          members={studioTeam}
          rosterLabel="/// L'équipe qui construit votre app"
          linkedinLabel="Voir sur LinkedIn"
        />
        <StudioFaq />
        <StudioCta />
      </main>
      <Footer links={links} location="Station F · Paris" />
    </>
  );
}
