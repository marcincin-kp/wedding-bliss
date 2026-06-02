import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-09-12T15:00:00+02:00").getTime();

function calc() {
  const diff = Math.max(0, WEDDING_DATE - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Dní", value: t.days },
    { label: "Hodín", value: t.hours },
    { label: "Minút", value: t.minutes },
    { label: "Sekúnd", value: t.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto">
      {items.map((it) => (
        <div
          key={it.label}
          className="bg-card/70 backdrop-blur-sm border border-border/60 rounded-xl py-4 sm:py-6 text-center shadow-soft"
        >
          <div className="font-serif text-3xl sm:text-5xl text-burgundy tabular-nums">
            {String(it.value).padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
}
