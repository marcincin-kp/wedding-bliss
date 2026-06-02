import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/wedding/Navbar";
import { Hero } from "@/components/wedding/Hero";
import { Welcome } from "@/components/wedding/Welcome";
import { Schedule } from "@/components/wedding/Schedule";
import { Locations } from "@/components/wedding/Locations";
import { Parking } from "@/components/wedding/Parking";
import { MenuSection } from "@/components/wedding/MenuSection";
import { RSVPForm } from "@/components/wedding/RSVPForm";
import { Accommodation } from "@/components/wedding/Accommodation";
import { FAQ } from "@/components/wedding/FAQ";
import { Gallery } from "@/components/wedding/Gallery";
import { Contact } from "@/components/wedding/Contact";
import { Footer } from "@/components/wedding/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Svadba Ráchel & Pavol · 12. 9. 2026 · Prešov" },
      {
        name: "description",
        content:
          "Pozvánka na svadbu Ráchel Sarakovej a Pavla Marcinčina — 12. september 2026, Prešov. Harmonogram, miesta, ubytovanie a potvrdenie účasti.",
      },
      { property: "og:title", content: "Svadba Ráchel & Pavol · 12. 9. 2026 · Prešov" },
      {
        property: "og:description",
        content:
          "Pozvánka na svadbu Ráchel Sarakovej a Pavla Marcinčina — 12. september 2026, Prešov. Harmonogram, miesta, ubytovanie a potvrdenie účasti.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Schedule />
        <Locations />
        <Parking />
        <MenuSection />
        <RSVPForm />
        <Accommodation />
        <FAQ />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
