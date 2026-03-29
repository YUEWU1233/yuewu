import BackButton from "../../BackButton";
import Image from "next/image";
import { withBasePath } from "../../lib/basePath";

export default function Project10Page() {
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
          Floating Air-Cathode Electrocoagulation Sand Filter for Efficient Arsenic Removal
        </h1>

        

        <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed text-slate-700 md:text-lg">
          This research develops a novel floating air-cathode electrocoagulation system integrated into sand filtration to enhance arsenic removal from groundwater. It focuses on improving oxidation efficiency, energy consumption, and scalability for practical rural water treatment applications.
        </p>

        <div className="mx-auto mt-6 w-[50%] overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project10/project10.png")}
            alt="Floating air-cathode electrocoagulation sand filter project preview"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <h2 className="mt-8 text-xl font-semibold text-slate-900 md:text-2xl">
          Project Summary
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          The objective of this study is to address the challenge of arsenic-contaminated groundwater, particularly in rural areas where conventional treatment methods are often inefficient, costly, or difficult to scale. A key limitation lies in the low removal efficiency of trivalent arsenic (As III), which is highly toxic and difficult to adsorb without prior oxidation.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          To overcome this, we developed a floating air-cathode iron electrocoagulation system and integrated it into a sand filter. The system enables in-situ hydrogen peroxide generation at the cathode and iron dissolution at the anode, triggering Fenton-like reactions that rapidly oxidize As(III) into As(V), which can then be effectively removed through coagulation and filtration. Compared with traditional electrocoagulation systems, the use of passive oxygen diffusion eliminates the need for aeration, reducing energy consumption by up to 74%. Additionally, the floating cathode design resolves pressure imbalance issues in conventional sidewall systems, enabling improved scalability and stability.
        </p>

        <div className="mx-auto mt-6 w-[50%] overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project10/project10-1.png")}
            alt="Floating air-cathode electrocoagulation setup and mechanism"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
          />
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          Experimental results demonstrate that the system achieves high arsenic removal efficiency, reaching over 90% removal under low-flow conditions and up to 98% removal under optimized operating conditions (e.g., 100 mA current with sedimentation or secondary filtration). The study further validates the feasibility of scaling the system to larger filtration units while maintaining performance.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          Overall, this work provides a low-cost, energy-efficient, and scalable solution for arsenic-contaminated groundwater treatment, particularly suited for decentralized rural applications. It also contributes to advancing electrochemical water treatment by integrating system design, reaction mechanisms, and real-world applicability into a unified framework.
        </p>

        <div className="mx-auto mt-6 w-[50%] overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project10/project10-2.png")}
            alt="Arsenic removal performance under optimized operating conditions"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
          />
        </div>
      </article>
    </main>
  );
}
