import { Car, ExternalLink, Footprints } from "lucide-react";
import parkingMap from "@/assets/parking-map.png";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const parkingSpots = [
  {
    id: "M",
    name: "Parkovacie miesta M Arény",
    walk: "pri mieste hostiny",
    capacity: "30 parkovacích miest",
    map: "https://www.google.com/maps/search/?api=1&query=M+Arena+Pre%C5%A1ov",
  },
  {
    id: "01",
    name: "Urxova ulica",
    walk: "4 min. pešo",
    capacity: "70 parkovacích miest",
    map: "https://maps.app.goo.gl/Eo6hJpYKCgj516rM7",
  },
  {
    id: "02",
    name: "Suvorovova ulica",
    walk: "4 min. pešo",
    capacity: "30 parkovacích miest",
    map: "https://maps.app.goo.gl/uDwyMaxBSbqK5dMj9",
  },
  {
    id: "03",
    name: "Švábska ulica",
    walk: "3 min. pešo",
    capacity: "30 parkovacích miest",
    map: "https://maps.app.goo.gl/sEvmDBxd8mLnDsFQ8",
  },
  {
    id: "04",
    name: "Solivarská ulica",
    walk: "9 min. pešo",
    capacity: "20 parkovacích miest",
    map: "https://maps.app.goo.gl/o55opt7xqr3jWwcT6",
  },
];

export function Parking() {
  return (
    <section id="parkovanie" className="py-20 sm:py-28 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Pri hostine"
          title="Parkovanie pri M Arene"
          subtitle="Parkovanie riešime v okolí hostiny. Prosíme, nechajte si krátku rezervu na presun pešo od parkovacieho miesta."
        />

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-stretch">
          <Reveal>
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border/60 shadow-soft h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full bg-burgundy text-primary-foreground flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <p className="uppercase tracking-[0.25em] text-xs text-burgundy/70">
                    Zoznam miest
                  </p>
                  <h3 className="font-serif text-2xl">Odporúčané parkovanie</h3>
                </div>
              </div>

              <div className="space-y-3">
                {parkingSpots.map((spot) => (
                  <a
                    key={spot.id}
                    href={spot.map}
                    target="_blank"
                    rel="noreferrer"
                    className="group grid grid-cols-[3.25rem_1fr_auto] gap-4 items-center rounded-xl border border-border/70 bg-background/65 px-4 py-3 transition hover:border-burgundy/40 hover:bg-background"
                  >
                    <span className="font-serif text-xl text-burgundy tabular-nums">
                      {spot.id === "M" ? "M" : spot.id}
                    </span>
                    <span>
                      <span className="block font-medium text-foreground">{spot.name}</span>
                      <span className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Footprints className="w-4 h-4" />
                          {spot.walk}
                        </span>
                        <span>{spot.capacity}</span>
                      </span>
                    </span>
                    <ExternalLink className="w-4 h-4 text-burgundy opacity-60 transition group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-[oklch(0.18_0.03_55)] shadow-soft h-full">
              <img
                src={parkingMap}
                alt="Mapka parkovania v okolí M Arény s piatimi vyznačenými parkovacími miestami"
                className="h-full min-h-[360px] w-full object-cover"
              />
              <div className="border-t border-primary-foreground/10 bg-[oklch(0.16_0.03_55)] px-5 py-4 text-primary-foreground">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-serif text-xl">Parkovanie v okolí M Arény</p>
                  <p className="text-sm text-primary-foreground/80">Spolu približne 180 miest</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
