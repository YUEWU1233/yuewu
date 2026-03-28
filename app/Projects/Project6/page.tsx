import BackButton from "../../BackButton";
import Image from "next/image";
import { withBasePath } from "../../lib/basePath";

export default function Project6Page() {
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
          Carbon-Aware Portfolio Construction and Performance Analysis in Pacific Equity Markets
        </h1>

        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project6/project6_2.png")}
            alt="Carbon-aware portfolio construction project preview"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed text-slate-700 md:text-lg">
          This project investigates how integrating carbon emissions into portfolio construction affects financial performance.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          Using a dataset of 426 publicly listed firms across major Pacific regions (Australia, Hong Kong, Japan, New Zealand, and Singapore), we combine financial data (returns and market value) with ESG metrics (Scope 1-3 carbon emissions) to analyze carbon intensity at the firm level.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          We construct and compare multiple portfolio strategies, including value-weighted, minimum variance, and decarbonized portfolios, to evaluate whether reducing carbon exposure leads to a trade-off in returns or risk.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900 md:text-2xl">
          Project Summary
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          This project develops and evaluates carbon-aware investment strategies by incorporating carbon intensity into portfolio optimization.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          First, firm-level carbon intensity is computed and analyzed, revealing significant heterogeneity across industries and companies. Based on this, we construct portfolios that aim to reduce weighted average carbon intensity (WACI), while remaining close to traditional market benchmarks.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          We then compare the financial performance of a value-weighted benchmark portfolio, a minimum variance portfolio, and a decarbonized portfolio with reduced carbon exposure.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          Our results show that portfolios with lower carbon intensity tend to achieve comparable or even superior returns, suggesting that carbon-efficient investing does not necessarily compromise financial performance. However, differences in volatility and Sharpe ratios indicate the presence of trade-offs between sustainability objectives and risk-return optimization.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project6/project6_1.png")}
            alt="Portfolio construction and carbon intensity analysis"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
          />
        </div>

        

        <p className="mt-6 text-sm text-slate-700 md:text-base">
          Data and code: please click{" "}
          <a
            href="https://github.com/YUEWU1233/Pacific-firms-with-available-scope-1-to-3-carbon-emissions"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            Here
          </a>
          .
        </p>

        <p className="mt-3 text-sm text-slate-700 md:text-base">
          Slides: please click{" "}
          <a
            href="https://drive.google.com/file/d/13YSAQubnbnfNn3_W0jpNzfHaOx8n6QMT/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            Here
          </a>
          .
        </p>
      </article>
    </main>
  );
}
