import BackButton from "../../BackButton";
import Image from "next/image";
import { withBasePath } from "../../lib/basePath";

export default function Project5Page() {
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
          Decarbonizing Residential Heating Systems in Geneva: A Material Flow Analysis Approach
        </h1>

        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project5/Project5.png")}
            alt="Decarbonizing residential heating systems in Geneva"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed text-slate-700 md:text-lg">
          This project analyzes the energy flows and carbon emissions of residential heating systems in Geneva and evaluates decarbonization pathways toward 2050. It combines material flow analysis with scenario modeling to assess the impact of renovation and renewable energy adoption.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900 md:text-2xl">
          Project Summary
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          The objective of this project is to understand how Geneva's residential heating system can transition toward carbon neutrality by 2050, given its current heavy reliance on fossil fuels.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          To address this, we constructed a material flow analysis framework using Swiss geospatial datasets and Python, mapping energy demand, heating technologies, and associated emissions at the building level. We then developed multiple forward-looking scenarios combining different renovation rates and levels of renewable energy integration to simulate how the system could evolve over time.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          The results show that while building renovation significantly reduces total energy demand, the largest emission reductions come from transitioning the energy mix, particularly through the adoption of district heating and heat pumps. The most ambitious scenario achieves over 87% reduction in CO2 emissions compared to a business-as-usual pathway.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          Overall, the study highlights that decarbonization of urban heating systems depends primarily on energy infrastructure transformation rather than efficiency improvements alone, providing actionable insights for policymakers on prioritizing renewable technologies and scalable heating solutions.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project5/Project5_2.png")}
            alt="Project 5 additional figure"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
          />
        </div>

        <p className="mt-6 text-sm text-slate-700 md:text-base">
          Full text: please click here.{" "}
          <a
            href="https://drive.google.com/file/d/1qF3wHfJkDn3QLFwG6lhDRR_YUTo6alaj/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            Here
          </a>
        </p>
      </article>
    </main>
  );
}
