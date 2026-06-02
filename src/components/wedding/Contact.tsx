import { Mail, Phone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Contact() {
  const people = [
    { role: "Nevesta", value: "[telefón / e-mail doplniť]" },
    { role: "Ženích", value: "[telefón / e-mail doplniť]" },
  ];
  return (
    <section id="kontakt" className="py-20 sm:py-28 px-6 bg-secondary/40">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Sme tu pre vás"
          title="Kontakt"
          subtitle="V prípade otázok nás môžete kontaktovať."
        />
        <div className="grid sm:grid-cols-2 gap-5">
          {people.map((p, i) => (
            <Reveal key={p.role} delay={i * 100}>
              <div className="bg-card rounded-2xl p-7 border border-border/60 shadow-soft text-center">
                <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center mx-auto mb-4">
                  {i === 0 ? (
                    <Mail className="w-5 h-5 text-burgundy" />
                  ) : (
                    <Phone className="w-5 h-5 text-burgundy" />
                  )}
                </div>
                <p className="uppercase tracking-[0.25em] text-xs text-burgundy/70 mb-2">
                  {p.role}
                </p>
                <p className="font-serif text-lg italic text-muted-foreground">
                  {p.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
