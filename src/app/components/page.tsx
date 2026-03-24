"use client";

import Link from "next/link";
import { useState } from "react";

type ShowcaseItem = {
  id: "button" | "navbar" | "scroll-stack-cards";
  label: string;
  title: string;
  description: string;
  snippet: string;
};

const showcaseItems: ShowcaseItem[] = [
  {
    id: "button",
    label: "Button",
    title: "Button Component",
    description:
      "A flexible action component with multiple variants and sizes for primary actions, subtle controls, and destructive flows.",
    snippet: `import { Button } from "@/components/ui/button";

export function ButtonShowcase() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="secondary" size="sm">Small</Button>
    </div>
  );
}`,
  },
  {
    id: "navbar",
    label: "Navbar",
    title: "Navbar Component",
    description:
      "A lightweight top navigation layout that balances branding, section links, and high-priority actions in a single horizontal bar.",
    snippet: `import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NavbarDemo() {
  return (
    <nav className="flex items-center justify-between rounded-2xl border p-4">
      <p className="font-semibold">Craft UI</p>
      <div className="hidden gap-3 sm:flex">
        <Link href="#">Components</Link>
        <Link href="#">Docs</Link>
      </div>
      <Button size="sm">Get Started</Button>
    </nav>
  );
}`,
  },
  {
    id: "scroll-stack-cards",
    label: "Scroll Stack Cards",
    title: "Scroll Stack Cards",
    description:
      "A storytelling section where cards layer progressively while scrolling, ideal for product highlights and visual narratives.",
    snippet: `const cards = ["Card 1", "Card 2", "Card 3"];

export function ScrollStackCardsDemo() {
  return (
    <section className="space-y-3">
      {cards.map((card, index) => (
        <article
          key={card}
          className="sticky top-24 rounded-2xl border bg-white p-6 shadow-lg"
          style={{ zIndex: index + 1 }}
        >
          {card}
        </article>
      ))}
    </section>
  );
}`,
  },
];

const demoByRoute: Record<ShowcaseItem["id"], { path: string; minHeight: number }> = {
  button: { path: "/components/button", minHeight: 360 },
  navbar: { path: "/components/navbar", minHeight: 260 },
  "scroll-stack-cards": { path: "/components/scroll-stack-cards", minHeight: 900 },
};

function renderDemo(id: ShowcaseItem["id"]) {
  const demo = demoByRoute[id];

  return (
    <iframe
      key={demo.path}
      src={demo.path}
      title={`${id} demo`}
      className="w-full rounded-xl border border-zinc-200 bg-white"
      style={{ minHeight: `${demo.minHeight}px` }}
    />
  );
}

export default function Page() {
  const [activeId, setActiveId] = useState<ShowcaseItem["id"]>("button");
  const activeItem = showcaseItems.find((item) => item.id === activeId) ?? showcaseItems[0];
  const activeDemoPath = demoByRoute[activeId].path;

  return (
    <main className="min-h-screen rounded-3xl bg-linear-to-br from-zinc-50 via-white to-zinc-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 rounded-2xl border border-zinc-200/70 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-7">
          <p className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Component Library
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Craft UI Showcase
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
            Explore production-ready component patterns with curated examples,
            descriptions, and practical usage snippets.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm lg:sticky lg:top-6 lg:h-fit">
            <p className="px-2 pb-2 text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
              Components
            </p>

            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
              {showcaseItems.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`min-w-max rounded-xl border px-4 py-2 text-left text-sm font-medium transition lg:w-full ${
                      isActive
                        ? "border-zinc-900 bg-zinc-900 text-white"
                        : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300 hover:bg-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="space-y-5">
            <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
                Overview
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
                {activeItem.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600 sm:text-base">
                {activeItem.description}
              </p>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
                  Demo
                </p>
                <Link
                  href={activeDemoPath}
                  className="text-xs font-semibold tracking-widest text-zinc-700 uppercase underline-offset-4 hover:underline"
                >
                  Open Component Page
                </Link>
              </div>
              <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:p-6">
                {renderDemo(activeItem.id)}
              </div>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
                Code
              </p>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-zinc-200 bg-zinc-950 p-4 sm:p-5">
                <pre className="text-xs leading-6 text-zinc-100 sm:text-sm">
                  <code>{activeItem.snippet}</code>
                </pre>
              </div>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}
