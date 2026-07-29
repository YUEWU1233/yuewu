"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { MemoryEntry } from "./memoriesData";

type MemoryTimelineCardProps = {
  timeline: Array<MemoryEntry & { photos: number }>;
};

const DEFAULT_MEMORY_TITLE = "Memory Archive";

export default function MemoryTimelineCard({ timeline }: MemoryTimelineCardProps) {
  const [selectedYear, setSelectedYear] = useState<number>(
    timeline[timeline.length - 1]?.year ?? new Date().getFullYear()
  );

  const selected = useMemo(
    () => timeline.find((item) => item.year === selectedYear) ?? timeline[timeline.length - 1],
    [selectedYear, timeline]
  );

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("MemoryTimelineCard selectedYear ->", selectedYear, "selected ->", selected?.year, selected?.title);
  }, [selectedYear, selected]);

  const latestYear = timeline[timeline.length - 1]?.year;

  if (!selected) {
    return null;
  }

  return (
    <section className="mb-8 rounded-3xl border border-emerald-100 bg-white/85 p-5 shadow-sm md:mb-10 md:p-7">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-cyan-50 to-amber-50 p-4 shadow-inner">
          <h2 className="mb-2 text-xl font-semibold text-slate-900 md:text-2xl">Memory Timeline</h2>
          <p className="mb-4 text-sm text-slate-600">
            Scroll years from 1996 to today and select a year to view key moments.
          </p>

          <div className="h-[360px] overflow-y-auto rounded-xl border border-emerald-100 bg-white/75 p-3">
            <div className="sticky top-0 z-10 mb-3 rounded-md border border-emerald-100 bg-emerald-50/95 px-3 py-2 text-xs font-semibold tracking-[0.08em] text-emerald-800 backdrop-blur">
              Years with key memories are highlighted.
            </div>

            <div className="relative flex flex-col gap-2 pl-3 before:absolute before:bottom-1 before:left-1 before:top-1 before:w-px before:bg-emerald-200/90">
              {timeline.map((item) => {
                const active = item.year === selectedYear;
                const hasMemory = item.title !== DEFAULT_MEMORY_TITLE;

                return (
                  <div
                    key={item.year}
                    className={`relative rounded-lg border px-4 py-2 text-left text-sm font-semibold transition-all ${
                      active
                        ? "border-emerald-600 bg-emerald-600 text-white shadow"
                        : hasMemory
                          ? "border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100"
                          : "border-emerald-100 bg-white text-slate-700 hover:bg-emerald-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          // debug: log selection
                          // eslint-disable-next-line no-console
                          console.log('MemoryTimelineCard select year', item.year);
                          setSelectedYear(() => item.year);
                        }}
                        className="flex-1 text-left"
                        data-year={item.year}
                      >
                        <span
                          className={`absolute -left-[1.02rem] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border ${
                            active
                              ? "border-emerald-100 bg-white"
                              : hasMemory
                                ? "border-emerald-500 bg-emerald-500"
                                : "border-emerald-300 bg-white"
                          }`}
                        />
                        <span className="pl-4">{item.year}</span>
                      </button>

                      {hasMemory ? (
                        <Link
                          href={`/Gallery/Memories/${item.year}`}
                          className={`ml-4 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${
                            active
                              ? "bg-white/20 text-emerald-50"
                              : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          Memory
                        </Link>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="rounded-2xl border border-emerald-100 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">Selected Year</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">{selected.year}</h3>

          <dl className="mt-4 space-y-3 text-sm text-slate-700">
            <div className="rounded-lg bg-slate-50 p-3">
              <dt className="text-slate-500">Memory</dt>
              <dd className="mt-1 font-semibold text-slate-900">{selected.title}</dd>
            </div>
            <div className="rounded-lg bg-slate-50 p-3">
              <dt className="text-slate-500">Photos</dt>
              <dd className="mt-1 font-semibold text-slate-900">{selected.photos}</dd>
            </div>
          </dl>

          {selected.summary ? (
            <p className="mt-4 text-sm leading-relaxed text-slate-700">{selected.summary}</p>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={`/Gallery/Memories/${selected.year}`}
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Open Year Carousel
            </Link>
            <button
              type="button"
              onClick={() => {
                if (latestYear) {
                  setSelectedYear(latestYear);
                }
              }}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Back to Latest Year
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
