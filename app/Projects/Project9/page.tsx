import BackButton from "../../BackButton";
import Image from "next/image";
import { withBasePath } from "../../lib/basePath";

export default function Project9Page() {
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
          Electrochemically Enhanced Iron–Sand Filtration System for High-Efficiency Arsenic Removal
        </h1>

       

        <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed text-slate-700 md:text-lg">
          This research develops a novel electrochemically enhanced iron–sand filtration system to address arsenic contamination in groundwater, particularly in rural decentralized water supply systems. It integrates in-situ hydrogen peroxide generation and pH self-adjustment to significantly improve arsenic removal efficiency.
        </p>

        <div className="mx-auto mt-6 w-full max-w-72 overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project9/project9-1.png")}
            alt="Experimental setup and field validation for electrochemical arsenic removal"
            width={700}
            height={420}
            className="h-auto w-full object-cover"
          />
        </div>

        <h2 className="mt-8 text-xl font-semibold text-slate-900 md:text-2xl">
          Project Summary
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          The objective of this research is to improve the efficiency of arsenic removal from groundwater, especially in rural areas where conventional methods such as adsorption and iron–sand filtration are often insufficient and require additional aeration.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          To address this, we designed a two-chamber electrochemical reactor that enables in-situ generation of hydrogen peroxide (H₂O₂) at the cathode and simultaneous pH self-adjustment through anodic reactions. This system enhances iron dissolution and triggers Fenton oxidation, effectively converting As(III) into more easily removable forms and enabling efficient removal through coagulation and sand filtration. The system performance was systematically evaluated by analyzing key parameters such as current density, charge density, flow rate, and iron material composition.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          The results demonstrate that the proposed system achieves over 99% arsenic removal efficiency, reducing effluent arsenic concentration to below 5 μg/L, significantly outperforming conventional iron–sand filtration systems. The study also identifies optimal operational conditions and reveals the underlying mechanism, including the synergistic role of electrochemical oxidation, iron dissolution, and flocculation processes.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          Overall, this work provides a scalable and energy-efficient solution for arsenic-contaminated groundwater treatment, offering a practical pathway to improve drinking water safety in rural and resource-constrained regions. It also contributes to advancing electrochemical water treatment technologies by integrating reaction design with mechanism-driven optimization.
        </p>

        

        <div className="mx-auto mt-6 w-[85%] overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project9/project9-2.png")}
            alt="Performance results of electrochemically enhanced filtration system"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
          />
        </div>
      </article>
    </main>
  );
}
