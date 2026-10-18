import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hey gurl! Birthday Surprise" },
      { name: "description", content: "Loading your birthday surprise..." },
      { property: "og:title", content: "Hey gurl! Birthday Surprise" },
      { property: "og:description", content: "Loading your birthday surprise..." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const deco = [
  { t: "(▀̿Ĺ̯▀̿ ̿)", c: "top-8 left-12 text-4xl" },
  { t: "(⌐■_■)", c: "bottom-40 right-20 text-3xl" },
  { t: "⭐", c: "top-4 right-16 text-2xl" },
  { t: "🌸", c: "top-12 right-28 text-2xl" },
  { t: "🍰", c: "top-20 left-24 text-2xl" },
  { t: "🎈", c: "top-44 left-10 text-2xl" },
  { t: "💗", c: "top-36 right-6 text-2xl" },
  { t: "🎀", c: "bottom-24 left-16 text-2xl" },
  { t: "💖", c: "bottom-28 right-6 text-2xl" },
  { t: "🍬", c: "bottom-36 left-32 text-2xl" },
];

function Index() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setP((v) => (v >= 100 ? 100 : v + 1)), 40);
    return () => clearInterval(id);
  }, []);
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background font-sans">
      {deco.map((d, i) => (
        <span key={i} className={`absolute text-2xl opacity-90 animate-floaty ${d.c}`} style={{ animationDelay: `${i * 0.4}s` }}>
          {d.t}
        </span>
      ))}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="font-script text-3xl text-title">Hey gurl! 🎉</h1>
        <div className="text-7xl">🎂</div>
        <p className="text-sm font-semibold text-foreground">
          Loading your birthday surprise...
        </p>
        <div className="h-2.5 w-32 overflow-hidden rounded-full bg-track">
          <div className="h-full rounded-full bg-party-gradient transition-all" style={{ width: `${p}%` }} />
        </div>
              </div>
    </main>
  );
}
