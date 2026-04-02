import BackButton from "../../BackButton";
import Image from "next/image";
import { withBasePath } from "../../lib/basePath";

export default function Project7Page() {
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
          Water Safety &amp; SDG Education Programs in Rural Communities
        </h1>

        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project7/project7.png")}
            alt="Water safety and SDG education programs project preview"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed text-slate-700 md:text-lg">
          This project focuses on improving water safety awareness and sustainability education in rural communities across China and Cambodia. It combines field-based interventions with SDG-oriented educational programs to support community development and capacity building.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900 md:text-2xl">
          Project Summary
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          The objective of this project is to address water safety challenges and promote sustainable development awareness in underserved rural regions, particularly through education and community engagement.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          To achieve this, we designed and implemented water safety programs in collaboration with local NGOs, conducting fieldwork in communities across China and Cambodia. The project also involved developing SDG-focused educational content and guiding students, from primary school to university level, in conducting research, surveys, and hands-on experiments related to water quality and sustainability.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          Through these initiatives, the program enhanced both local awareness of water safety issues and students&apos; ability to apply sustainability concepts in real-world contexts. The collaboration with local organizations ensured effective knowledge transfer and long-term community engagement, demonstrating how education-driven interventions can create scalable and impactful solutions in sustainable development.
        </p>
      </article>
    </main>
  );
}
