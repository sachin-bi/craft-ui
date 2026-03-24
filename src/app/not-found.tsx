import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#dbeafe_0%,transparent_35%),radial-gradient(circle_at_80%_25%,#fde68a_0%,transparent_30%),radial-gradient(circle_at_50%_85%,#fecaca_0%,transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.08)_1px,transparent_1px)] bg-size-[44px_44px] opacity-40" />
      </div>

      <section className="w-full max-w-3xl rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-2xl backdrop-blur-md sm:p-10">
        <p className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
          Error 404
        </p>

        <div className="mt-3 flex items-center gap-3">
          <span className="inline-flex rounded-xl border border-zinc-200 bg-zinc-100 p-2 text-zinc-700">
            <Compass className="size-5" aria-hidden="true" />
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            This page slipped off the map
          </h1>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
          The route you requested does not exist in this build. Use one of the
          quick links below to jump back into Craft UI and continue exploring
          components.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="px-4">
            <Link href="/components">
              Go to Components
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="px-4">
            <Link href="/">Try Home Route</Link>
          </Button>
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
          <p className="text-sm font-medium text-zinc-800">Suggested paths</p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs sm:text-sm">
            <Link
              href="/components"
              className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900"
            >
              /components
            </Link>
            <Link
              href="/components/button"
              className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900"
            >
              /components/button
            </Link>
            <Link
              href="/components/navbar"
              className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900"
            >
              /components/navbar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
