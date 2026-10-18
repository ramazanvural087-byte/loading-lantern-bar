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
  { t: "(▀̿Ĺ̯▀̿ ̿)", c: "top-8 left-12 text-2xl" },
  { t: "(⌐■_■)", c: "bottom-40 right-20 text-xl" },
  { t: "⭐", c: "top-4 right-16" },
  { t: "🌸", c: "top-12 right-28" },
  { t: "🍰", c: "top-20 left-24" },
  { t: "🎈", c: "top-44 left-10" },
  { t: "💗", c: "top-36 right-6" },
  { t: "🎀", c: "bottom-24 left-16" },
  { t: "💖", c: "bottom-28 right-6" },
  { t: "🍬", c: "bottom-36 left-32" },
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
        <span key={i} className={`absolute animate-floaty ${d.c}`} style={{ animationDelay: `${i * 0.4}s` }}>
          {d.t}
        </span>
      ))}
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="font-script text-3xl text-party">Hey gurl! 🎉</h1>
        <div className="text-6xl">🎂</div>
        <p className="text-sm font-semibold text-foreground">
          {p < 100 ? "Loading your birthday surprise..." : "Your surprise is ready! 💜"}
        </p>
        <div className="h-3 w-40 overflow-hidden rounded-full bg-track">
          <div className="h-full rounded-full bg-party-gradient transition-all" style={{ width: `${p}%` }} />
        </div>
        <span className="text-xs text-muted-foreground">{p}%</span>
      </div>
    </main>
  );
}
