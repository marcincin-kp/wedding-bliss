import { Church, Car, UtensilsCrossed, Music, Cake, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const items = [
  {
    time: "15:00",
    title: "Svadobný obrad",
    desc: "Chrám blahoslaveného Petra Pavla Gojdiča, Prešov, Sídlisko III",
    icon: Church,
  },
  {
    time: "[čas doplniť]",
    title: "Presun na hostinu",
    desc: "M Arena Prešov",
    icon: Car,
  },
  {
    time: "[čas doplniť]",
    title: "Svadobná hostina",
    desc: "Privítanie, večera a spoločný program",
    icon: UtensilsCrossed,
  },
  { time: "[čas doplniť]", title: "Prvý tanec", desc: "", icon: Music },
  { time: "[čas doplniť]", title: "Krájanie torty", desc: "", icon: Cake },
  { time: "[čas doplniť]", title: "Voľná zábava", desc: "", icon: Sparkles },
];

export function Schedule() {
  return (
    <section id="harmonogram" className="py-20 sm:py-28 px-6 bg-secondary/40">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="Priebeh dňa" title="Harmonogram" />

        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-burgundy/30 to-transparent" />

          {items.map((it, i) => (
            <Reveal key={i} delay={i * 60}>
              <div
                className={`relative flex items-start gap-5 mb-8 sm:mb-10 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-burgundy ring-4 ring-background z-10 mt-5" />

                <div className="hidden sm:block flex-1" />

                <div className="ml-14 sm:ml-0 flex-1">
                  <div
                    className={`bg-card rounded-2xl p-5 sm:p-6 shadow-soft border border-border/60 ${
                      i % 2 === 0 ? "sm:mr-10" : "sm:ml-10"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <it.icon className="w-5 h-5 text-burgundy" />
                      <span className="font-serif text-lg text-burgundy">{it.time}</span>
                    </div>
                    <h3 className="font-serif text-xl text-foreground">{it.title}</h3>
                    {it.desc && (
                      <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
