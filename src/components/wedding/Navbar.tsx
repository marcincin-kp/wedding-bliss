import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#uvod", label: "Úvod" },
  { href: "#harmonogram", label: "Harmonogram" },
  { href: "#miesta", label: "Miesta" },
  { href: "#parkovanie", label: "Parkovanie" },
  { href: "#menu", label: "Menu" },
  { href: "#ubytovanie", label: "Ubytovanie" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/85 backdrop-blur-md shadow-soft" : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#uvod" className="font-script text-2xl text-burgundy">
          A &amp; B
        </a>
        <ul className="hidden lg:flex items-center gap-7 text-sm tracking-wide uppercase">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-foreground/80 hover:text-burgundy transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          aria-label="Otvoriť menu"
          className="lg:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <ul className="flex flex-col py-4 px-6 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-foreground/85 hover:text-burgundy uppercase text-sm tracking-wide border-b border-border/40 last:border-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
