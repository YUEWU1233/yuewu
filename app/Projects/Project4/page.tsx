import BackButton from "../../BackButton";
import Image from "next/image";
import { withBasePath } from "../../lib/basePath";

export default function Project4Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6">
        <BackButton href="/Projects" />
      </div>

      <article className="rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-sm md:p-8">
        <h1
          className="text-2xl leading-tight text-slate-900 md:text-4xl"
          style={{
            fontFamily: 'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
          }}
        >
          Logitech: Digital Product Passport & Dynamic Carbon Calculation for
          Sustainable Product Design
        </h1>

        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project4/DPP.jpg")}
            alt="Digital Product Passport interface preview"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed text-slate-700 md:text-lg">
          This project is part of Logitech&apos;s broader decarbonization
          initiative, aiming to enhance product-level transparency and
          sustainability. It focuses on developing a Digital Product Passport
          (DPP) that integrates carbon footprint data, lifecycle information,
          and user interaction, supporting Logitech&apos;s transition toward
          low-carbon and circular product design.
        </p>

        <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
          This project centers on the design and implementation of a Digital
          Product Passport (DPP) system for Logitech products, with a strong
          focus on carbon transparency and lifecycle sustainability.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          At its core, I developed a dynamic carbon emission calculator that
          leverages Logitech&apos;s internal carbon database to estimate
          product-level emissions across the full lifecycle. Unlike static
          carbon labels, this model incorporates real-world usage scenarios,
          including product lifespan, repair frequency, and replacement
          behavior, enabling more accurate and scenario-based carbon
          assessments.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          Building on this, I designed a time-based decarbonization framework,
          identifying key emission hotspots and evaluating potential reduction
          pathways, including alternative materials, energy efficiency
          improvements, and circular design strategies.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          To enhance accessibility and user engagement, I also prototyped a
          Digital Product Passport interface (using React), which integrates:
        </p>

        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 md:text-base">
          <li>Product carbon footprint data</li>
          <li>
            Sustainability attributes (for example recycled materials and energy
            efficiency)
          </li>
          <li>Repair and maintenance information</li>
          <li>End-of-life guidance</li>
        </ul>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          The system is designed to support both internal decision-making (for
          example product design and sustainability strategy) and external
          transparency, aligning with emerging regulations such as the EU&apos;s
          Ecodesign for Sustainable Products Regulation (ESPR).
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project4/project0.jpg")}
            alt="Logitech sustainability communication visual"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
          />
        </div>
      </article>
    </main>
  );
}


