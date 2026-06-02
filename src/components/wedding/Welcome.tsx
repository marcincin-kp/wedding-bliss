import { Reveal } from "./Reveal";

export function Welcome() {
  return (
    <section className="py-20 sm:py-28 px-6">
      <Reveal className="max-w-2xl mx-auto text-center">
        <p className="font-script text-5xl text-burgundy mb-6">Vitajte</p>
        <p className="font-serif text-xl sm:text-2xl leading-relaxed text-foreground/80 italic">
          Milá rodina a priatelia,
        </p>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/75 font-light">
          veľmi sa tešíme, že s vami môžeme zdieľať tento výnimočný deň. Na tejto stránke nájdete
          všetky dôležité informácie o obrade, hostine, parkovaní, ubytovaní a priebehu svadobného
          dňa.
        </p>
      </Reveal>
    </section>
  );
}
