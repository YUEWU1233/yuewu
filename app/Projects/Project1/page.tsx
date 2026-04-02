import Image from "next/image";
import BackButton from "../../BackButton";
import { withBasePath } from "../../lib/basePath";

export default function Project1Page() {
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
          Sonceboz: The Carbon Reduction Project for Electric Motors
        </h1>

        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project1/communication-Sonceboz-0.jpg")}
            alt="Sonceboz project visual"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed text-slate-700 md:text-lg">
          This project, in collaboration with Sonceboz SA, aimed to identify
          and address carbon footprint hotspots of key actuator components
          through lifecycle assessments (LCA). The team designed a roadmap
          outlining practical strategies to reduce emissions, including
          improving recycling processes, adopting renewable energy, and
          exploring alternative materials, thereby promoting a transition toward
          a more sustainable automotive industry.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900 md:text-2xl">
          Sonceboz - Carbon Footprint Reduction Project
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          The automotive industry, responsible for 10% of global CO2 emissions,
          faces significant challenges in reducing its carbon footprint, despite
          ambitious goals like the EU&apos;s 55% emission reduction by 2030 and the
          2035 thermal vehicle ban. Issues such as EV battery disposal and slow
          adoption of EVs persist. Sonceboz SA, a Swiss leader in mechatronic
          systems, is committed to sustainability through energy-saving
          initiatives, waste recycling, and a target of carbon neutrality by
          2039. A mechatronics system is composed of mechanical parts, electric
          devices, electronics components, sensors, hardware and software which
          controls and commands the system. An actuator is a type of mechatronic
          system responsible for initiating action or movement in another
          connected component. A single car can contain over 100 actuators,
          each serving different functions. Actuators play a critical role in
          contemporary automotive manufacturing, serving as essential components
          in vehicle functionality. Sonceboz has established itself as a leading
          producer of actuators, recognized for their innovation, reliability,
          high performance, and safety. The company&apos;s technological expertise
          meets the demands of the industry, as evidenced by its collaboration
          with many globally renowned car manufacturers. However, the focus
          extends beyond technological capability to the environmental impact of
          these components. In this context, Sonceboz has conducted a
          comprehensive assessment of the carbon footprint associated with three
          key actuator components: printed circuit boards (PCBs), magnets, and
          laminated stacks.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          This project aims to breakdown and reduce this carbon footprint,
          through life cycle assessments and actionable recommendations,
          aligning Sonceboz with global sustainability objectives. To enhance
          sustainability, Sonceboz could focus on improving recycling, adopting
          alternative materials, using renewable energy, and engaging
          stakeholders. Collaborating with suppliers can enhance the use of
          recycled materials, while partnerships with rare-earth metal recycling
          facilities can significantly mitigate environmental impact across
          downstream product use. Exploring biodegradable PCB alternatives and
          promoting renewable energy in manufacturing are also crucial steps,
          especially in supplier regions with fossil-fuel-dependent electricity.
          Stakeholder engagement is crucial for all recommendations to reduce
          emissions, driving a circular economy. The environmental benefits of
          recycling can in some cases reduce carbon emissions by over 80%.
          Decarbonizing energy grids and enhancing recycling infrastructure are
          essential for long-term sustainability in the automotive industry.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project1/communication-Sonceboz-1.jpg")}
            alt="Sonceboz workshop and communication visual"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-6">
          <a
            href="https://e4s.center/transformative-project/sonceboz-the-sonceboz-co2-reduction-project-for-electric-motors/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#4C594F] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#35403A]"
          >
            View External Project Link
          </a>
        </div>
      </article>
    </main>
  );
}



