import BackButton from "../../BackButton";
import Image from "next/image";
import { withBasePath } from "../../lib/basePath";

export default function Project2Page() {
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
          Life Cycle Assessment for Bio Lab Tube Comparison
        </h1>

        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project2.jpg")}
            alt="Bio lab tube comparison project visual"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed text-slate-700 md:text-lg">
          This project analyzes the environmental impact of laboratory
          consumables, specifically disposable plastic tubes versus reusable
          glass tubes, within a Biosafety Level 2 (BSL-2) lab setting. Using
          life cycle assessment (LCA) methodology aligned with ISO 14040/44
          standards and implemented through OpenLCA with the Ecoinvent
          database, the study quantifies environmental impacts across multiple
          scenarios.
        </p>

        <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
          This Life Cycle Assessment (LCA) project investigates the
          environmental performance of 50 mL laboratory tubes, comparing
          single-use plastic tubes with reusable glass alternatives, within a
          Biosafety Level 2 (BSL-2) laboratory. The analysis follows the ISO
          14040/44 framework, using OpenLCA software and the Ecoinvent 3.8
          database. It considers the full life cycle of each tube type,
          including raw material extraction, manufacturing, transportation, use
          (including washing and sterilization for glass), and end-of-life
          disposal.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          Two main scenarios were developed: one focused on single-use plastic
          tubes, and another based on reusable glass tubes with repeated
          cleaning cycles. The environmental impacts were assessed across
          multiple categories such as climate change, freshwater
          eutrophication, and resource use.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          The results show that while glass tubes have higher initial
          environmental costs due to their production and cleaning
          requirements, their impact per use declines significantly with
          increased reuse.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          Sensitivity analysis was conducted to evaluate the influence of
          factors such as washing efficiency and the number of reuse cycles on
          the comparative performance of glass tubes. The findings support the
          adoption of reusable glassware in lab settings where operational
          conditions permit, as a viable strategy for reducing carbon footprint.
          This study contributes to broader efforts in sustainable lab
          practices and supports decision-making toward greener consumable use.
        </p>
      </article>
    </main>
  );
}



