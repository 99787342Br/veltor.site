import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Nav } from "@/components/veltor/Nav";
import { Hero } from "@/components/veltor/Hero";
import { Positioning } from "@/components/veltor/Positioning";
import { Philosophy } from "@/components/veltor/Philosophy";
import { TechAuthority } from "@/components/veltor/TechAuthority";
import { Services } from "@/components/veltor/Services";
import { Benefits } from "@/components/veltor/Benefits";
import { Pricing } from "@/components/veltor/Pricing";
import { Portfolio } from "@/components/veltor/Portfolio";
import { FinalCTA } from "@/components/veltor/FinalCTA";
import { Footer } from "@/components/veltor/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VELTOR — Criação de Sites Premium" },
      {
        name: "description",
        content:
          "VELTOR cria sites premium, rápidos e estratégicos para empresas que querem autoridade, credibilidade e conversão no digital.",
      },
      { property: "og:title", content: "VELTOR — Criação de Sites Premium" },
      {
        property: "og:description",
        content:
          "Experiências digitais que elevam marcas ao próximo nível. Sites institucionais, landing pages e e-commerces com design global.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "VELTOR — Criação de Sites Premium" },
      {
        name: "twitter:description",
        content:
          "Sites premium que redefinem a presença digital. Design Apple-grade, foco em autoridade e conversão.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();
  return (
    <main className="bg-veltor-black">
      <Nav />
      <Hero />
      <Positioning />
      <Philosophy />
      <TechAuthority />
      <Services />
      <Benefits />
      <Pricing />
      <Portfolio />
      <FinalCTA />
      <Footer />
    </main>
  );
}
