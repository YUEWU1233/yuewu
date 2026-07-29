import BackButton from "../../../BackButton";
import CountryWall from "../../CountryWall";
import { getMemoryYears } from "../../memoriesData";
import { getMemoryImages } from "../../../lib/gallery";

export function generateStaticParams() {
  return getMemoryYears().map((year) => ({
    year: String(year),
  }));
}

export default async function MemoryYearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const resolved = await params;
  const year = Number(resolved.year);
  const validYears = getMemoryYears();

  if (!Number.isFinite(year) || !validYears.includes(year)) {
    return (
      <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <div className="mb-6">
          <BackButton href="/Gallery" />
        </div>
        <section className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm md:p-8">
          <h1 className="text-2xl font-semibold text-slate-900 md:text-4xl">Invalid Year</h1>
          <p className="mt-4 text-sm text-slate-700 md:text-base">
            This memory year is outside the supported timeline.
          </p>
        </section>
      </main>
    );
  }

  const images = getMemoryImages(year);

  if (images.length === 0) {
    return (
      <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <div className="mb-6">
          <BackButton href="/Gallery" />
        </div>
        <section className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
            Memory Gallery
          </p>
          <h1 className="mt-2 text-3xl text-slate-900 md:text-4xl">{year}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
            Coming soon. Add photos to the yearly memory folder to unlock this carousel.
          </p>
        </section>
      </main>
    );
  }

  return <CountryWall title={`Memories ${year}`} images={images} />;
}
