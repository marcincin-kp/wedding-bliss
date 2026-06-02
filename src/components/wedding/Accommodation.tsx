import { Bed } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const items = [
  {
    name: "[Názov ubytovania]",
    address: "[Adresa]",
    distance: "[Vzdialenosť od M Areny]",
    contact: "[Kontakt / web]",
    note: "[Poznámka]",
  },
  {
    name: "[Názov ubytovania]",
    address: "[Adresa]",
    distance: "[Vzdialenosť od M Areny]",
    contact: "[Kontakt / web]",
    note: "[Poznámka]",
  },
  {
    name: "[Názov ubytovania]",
    address: "[Adresa]",
    distance: "[Vzdialenosť od M Areny]",
    contact: "[Kontakt / web]",
    note: "[Poznámka]",
  },
];

export function Accommodation() {
  return (
    <section id="ubytovanie" className="py-20 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Pre vašu pohodu"
          title="Ubytovanie"
          subtitle="Pre hostí, ktorí budú potrebovať ubytovanie v Prešove alebo okolí, doplníme odporúčané možnosti neskôr."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="bg-card rounded-2xl p-6 border border-border/60 shadow-soft h-full">
                <Bed className="w-6 h-6 text-burgundy mb-4" />
                <h3 className="font-serif text-xl mb-3">{it.name}</h3>
                <dl className="text-sm space-y-1.5 text-muted-foreground">
                  <div><dt className="inline text-foreground/70">Adresa: </dt><dd className="inline italic">{it.address}</dd></div>
                  <div><dt className="inline text-foreground/70">Vzdialenosť: </dt><dd className="inline italic">{it.distance}</dd></div>
                  <div><dt className="inline text-foreground/70">Kontakt: </dt><dd className="inline italic">{it.contact}</dd></div>
                  <div><dt className="inline text-foreground/70">Poznámka: </dt><dd className="inline italic">{it.note}</dd></div>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
