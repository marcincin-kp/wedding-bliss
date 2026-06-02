import { Car } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Parking() {
  const blocks = [
    {
      title: "Parkovanie pri obrade",
      desc: "Informácie o možnostiach parkovania pri chráme doplníme neskôr.",
    },
    {
      title: "Parkovanie pri hostine",
      desc: "Informácie o parkovaní pri M Arene doplníme neskôr.",
    },
  ];
  return (
    <section id="parkovanie" className="py-20 sm:py-28 px-6 bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Pre vaše pohodlie"
          title="Parkovanie"
          subtitle="Prosíme hostí, aby si v deň svadby nechali dostatočnú časovú rezervu na presun a parkovanie."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <div className="bg-card rounded-2xl p-7 border border-border/60 shadow-soft h-full">
                <Car className="w-6 h-6 text-burgundy mb-4" />
                <h3 className="font-serif text-xl mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
