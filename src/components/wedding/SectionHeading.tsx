import { type ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      {eyebrow && (
        <p className="uppercase tracking-[0.35em] text-xs text-burgundy/70 mb-4">{eyebrow}</p>
      )}
      <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">{title}</h2>
      <div className="divider-ornament mb-4" />
      {subtitle && <p className="max-w-2xl mx-auto text-muted-foreground font-light">{subtitle}</p>}
    </div>
  );
}
