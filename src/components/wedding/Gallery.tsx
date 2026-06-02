import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const images = [
  { src: g1, alt: "Snúbenci pri západe slnka" },
  { src: g2, alt: "Svadobné prstene" },
  { src: g3, alt: "Svadobná kytica" },
  { src: g4, alt: "Slávnostná tabuľa" },
];

export function Gallery() {
  return (
    <section className="py-20 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Spomienky" title="Fotogaléria" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-soft group">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
