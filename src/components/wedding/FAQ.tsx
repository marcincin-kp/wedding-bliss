import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "Kedy máme prísť na obrad?",
    a: "Prosíme hostí, aby prišli aspoň 15–20 minút pred začiatkom obradu.",
  },
  {
    q: "Bude zabezpečený presun medzi obradom a hostinou?",
    a: "Informácie o presune doplníme neskôr.",
  },
  { q: "Môžeme prísť s deťmi?", a: "Informáciu doplníme neskôr." },
  {
    q: "Je potrebné potvrdiť účasť?",
    a: "Áno, prosíme vás o vyplnenie formulára na tejto stránke.",
  },
  { q: "Do kedy treba potvrdiť účasť?", a: "Termín doplníme neskôr." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 sm:py-28 px-6 bg-secondary/40">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="Často kladené otázky" title="Praktické informácie" />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-card rounded-xl border border-border/60 shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5"
                >
                  <span className="font-serif text-lg text-foreground">{f.q}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-burgundy shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-burgundy shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 text-muted-foreground leading-relaxed -mt-2">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
