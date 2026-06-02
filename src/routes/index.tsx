import { createFileRoute } from "@tanstack/react-router";
import { WeddingPage } from "@/components/wedding/WeddingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Svadba Ráchel & Pavol · 12. 9. 2026 · Prešov" },
      {
        name: "description",
        content:
          "Pozvánka na svadbu Ráchel Sarakovej a Pavla Marcinčina — 12. september 2026, Prešov. Harmonogram, miesta, ubytovanie a potvrdenie účasti.",
      },
      { property: "og:title", content: "Svadba Ráchel & Pavol · 12. 9. 2026 · Prešov" },
      {
        property: "og:description",
        content:
          "Pozvánka na svadbu Ráchel Sarakovej a Pavla Marcinčina — 12. september 2026, Prešov. Harmonogram, miesta, ubytovanie a potvrdenie účasti.",
      },
    ],
  }),
  component: WeddingPage,
});
