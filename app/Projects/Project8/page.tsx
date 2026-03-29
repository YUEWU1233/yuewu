import BackButton from "../../BackButton";
import Image from "next/image";
import { withBasePath } from "../../lib/basePath";

export default function Project8Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6">
        <BackButton href="/Projects" />
      </div>

      <article className="rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-sm md:p-8">
        <h1
          className="text-2xl leading-tight text-slate-900 md:text-4xl"
          style={{
            fontFamily:
              'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
          }}
        >
          Rural Water Safety Intervention: Arsenic Removal and Community Implementation in Shanxi
        </h1>

        

        <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed text-slate-700 md:text-lg">
          This project addresses arsenic contamination in rural drinking water systems in Northern China through the deployment of low-cost filtration technologies and large-scale field implementation. It combines environmental engineering, field research, and community engagement to deliver sustainable and scalable water safety solutions.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project8/project8_1.png")}
            alt="Field deployment of arsenic removal filtration systems"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
          />
        </div>

        <h2 className="mt-8 text-xl font-semibold text-slate-900 md:text-2xl">
          Project Summary
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          The objective of this project is to mitigate arsenic contamination in rural groundwater systems and improve access to safe drinking water in underserved communities, particularly in Shanxi Province where arsenic exposure poses severe public health risks.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          To achieve this, we applied and further optimized low-cost arsenic removal technologies based on sand filtration integrated with iron adsorption (NIS system). The project involved extensive fieldwork, including water quality testing, system design, and on-site construction of filtration units in multiple villages. A key focus was the large-scale implementation in Shanxi (Pingyao), where arsenic levels were found to exceed WHO guidelines by up to 20 times. Through iterative experimentation and field validation, the improved filtration system was successfully deployed across dozens of households, accompanied by continuous monitoring, maintenance, and community training.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          In 2018, the project further expanded through systematic village-level surveys, water safety assessments, and infrastructure maintenance, reaching multiple surrounding communities and strengthening collaboration with local authorities. Across the entire program, hundreds of filtration systems were constructed or distributed, benefiting a large number of households and significantly reducing exposure to contaminated groundwater.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          The results demonstrate that combining low-cost engineering solutions with long-term field engagement can effectively translate environmental research into real-world impact. The project not only improved water quality but also built local capacity for sustainable maintenance and adoption. Its significance was recognized by being awarded the Second Prize in the 2018 National Youth Service Social Practice, highlighting its contribution to public health and sustainable development.
        </p>

        

        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project8/project8_2.jpg")}
            alt="Community implementation and maintenance training activities"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
          />
        </div>
      </article>
    </main>
  );
}
