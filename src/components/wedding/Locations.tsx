import { MapPin, Church, UtensilsCrossed } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const places = [
  {
    icon: Church,
    eyebrow: "Obrad",
    name: "Chrám blahoslaveného Petra Pavla Gojdiča",
    address: "Prešov, Sídlisko III",
    time: "15:00",
    map: "https://www.google.com/maps/search/?api=1&query=Chr%C3%A1m+blahoslaven%C3%A9ho+Petra+Pavla+Gojdi%C4%8Da+Pre%C5%A1ov",
  },
  {
    icon: UtensilsCrossed,
    eyebrow: "Hostina",
    name: "M Arena Prešov",
    address: "Prešov",
    time: "[čas doplniť]",
    map: "https://www.google.com/maps/search/?api=1&query=M+Arena+Pre%C5%A1ov",
  },
];

export function Locations() {
  return (
    <section id="miesta" className="py-20 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Kde nás nájdete" title="Miesta konania" />
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {places.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/60 h-full flex flex-col">
                <p className="uppercase tracking-[0.3em] text-xs text-burgundy/70 mb-4">
                  {p.eyebrow}
                </p>
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-burgundy" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-2">{p.name}</h3>
                <p className="text-muted-foreground flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" /> {p.address}
                </p>
                <p className="text-burgundy font-serif text-lg mt-2">Čas: {p.time}</p>
                <a
                  href={p.map}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center px-6 py-2.5 bg-burgundy text-primary-foreground rounded-full text-xs tracking-wider uppercase hover:opacity-90 transition self-start"
                >
                  Zobraziť trasu
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
