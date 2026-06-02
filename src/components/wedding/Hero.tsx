import heroBg from "@/assets/wedding-hero.jpg";
import { Countdown } from "./Countdown";

export function Hero() {
  return (
    <section
      id="uvod"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/45 to-background" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="uppercase tracking-[0.4em] text-xs sm:text-sm text-burgundy/80 mb-6">
          Pozývame vás na našu svadbu
        </p>

        <h1 className="font-script text-burgundy text-6xl sm:text-8xl md:text-9xl leading-none mb-2">
          Ráchel
        </h1>
        <div className="font-serif italic text-2xl sm:text-3xl text-foreground/70 my-3">
          &amp;
        </div>
        <h1 className="font-script text-burgundy text-6xl sm:text-8xl md:text-9xl leading-none mb-8">
          Pavol
        </h1>

        <div className="divider-ornament my-8">
          <span className="inline-flex rounded-full border border-background/70 bg-background/75 px-5 py-2 text-base sm:text-lg uppercase tracking-[0.28em] shadow-soft backdrop-blur-md">
            12 · 09 · 2026
          </span>
        </div>

        <div className="mx-auto mb-2 max-w-2xl rounded-2xl border border-background/70 bg-background/72 px-5 py-4 shadow-soft backdrop-blur-md">
          <p className="font-serif italic text-xl sm:text-2xl text-foreground">
            „Ja a môj dom, my chceme slúžiť Pánovi.“
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-burgundy/80">
            Joz 24,15
          </p>
        </div>
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-10">
          Prešov
        </p>

        <Countdown />

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
          <a
            href="#rsvp"
            className="inline-flex items-center justify-center px-8 py-3 bg-burgundy text-primary-foreground rounded-full text-sm tracking-wider uppercase shadow-elegant hover:opacity-90 transition"
          >
            Potvrdiť účasť
          </a>
          <a
            href="#harmonogram"
            className="inline-flex items-center justify-center px-8 py-3 border border-burgundy/40 text-burgundy rounded-full text-sm tracking-wider uppercase hover:bg-burgundy/5 transition"
          >
            Pozrieť harmonogram
          </a>
        </div>
      </div>
    </section>
  );
}
