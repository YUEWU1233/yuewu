type Entry = {
  title: string;
  href: string;
  journal: string;
  authors: string;
  year: number;
};

const publications: Entry[] = [
  {
    title:
      "Transformation of dissolved organic matter during groundwater arsenite removal using air cathode iron electrocoagulation.",
    href: "https://doi.org/10.1016/j.chemosphere.2024.142083",
    journal: "Chemosphere, Volume 358, June 2024, 142083",
    authors:
      "Ying Yuan, Jiabao Chen, Hao Zhang, Yue Wu, Yu Xiao, Wan Huang, Ynag Wang, Jun Tang, Fang Zhang",
    year: 2024,
  },
  {
    title:
      "Inhibiting effects of humic acid on iron flocculation hindered As removal by electro-flocculation on air cathode iron anode.",
    href: "https://doi.org/10.1016/j.ecoenv.2024.116228",
    journal:
      "Ecotoxicology and Environmental Safety, Volume 275, 15 April 2024, 116228",
    authors:
      "Fang Zhang, Hao Zhang, Yue Wu, Yu Xiao, Wan Huang, Jun Tang, Ying Yuan, Jiabao Chen",
    year: 2024,
  },
  {
    title:
      "Tradeoff between groundwater arsenite removal efficiency and production in the self-powered air cathode electrocoagulation with different oxygen reduction pathways.",
    href: "https://doi.org/10.1016/j.jhazmat.2018.05.048",
    journal:
      "Journal of Hazardous Materials, Volume 357, 5 September 2018, Pages 138-145",
    authors:
      "Yanxiao Si, Guanghe Li, Yue Wu, Hao Zhang, Ying Yuan, Haichuan Zhang, Bo Liu, Fang Zhang",
    year: 2018,
  },
];

const patents: Entry[] = [
  {
    title:
      "An apparatus and method for strengthening iron-sand filter water purification ability by in-situ hydrogen peroxide production combined with pH self-regulation.",
    href: "https://xueshu.baidu.com/usercenter/paper/show?paperid=11210470f74u0v90kf4m0j00vw187651&site=xueshu_se",
    journal:
      "基于电产双氧水协同pH自调节强化铁的净水装置及方法 (CN113003802A), 2021-06-22",
    authors: "Fang Zhang, Yue Wu, Guanghe Li, Deyi Hou",
    year: 2021,
  },
  {
    title:
      "A self-driven ferroelectric flocculation-sand filter water purification device and method thereof.",
    href: "https://xueshu.baidu.com/usercenter/paper/show?paperid=1u1p02406y3k0pt0nw0002b0tc638103&site=xueshu_se",
    journal: "基于自驱动电化学类芬顿-絮凝反应的净水装置及方法",
    authors: "Fang Zhang, Yue Wu, Guanghe Li, Deyi Hou",
    year: 2021,
  },
];

const sortedPublications = [...publications].sort((a, b) => b.year - a.year);
const sortedPatents = [...patents].sort((a, b) => b.year - a.year);

function HighlightYueWu({ authors }: { authors: string }) {
  return (
    <>
      {authors.split("Yue Wu")[0]}
      <span className="font-semibold text-emerald-800">Yue Wu</span>
      {authors.split("Yue Wu")[1] ?? ""}
    </>
  );
}

function EntryCard({ entry }: { entry: Entry }) {
  return (
    <li className="rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <a
          className="text-lg font-semibold leading-snug text-slate-900 underline decoration-emerald-500/50 underline-offset-4 transition-colors hover:text-emerald-700"
          href={entry.href}
          target="_blank"
          rel="noreferrer"
        >
          {entry.title}
        </a>
        <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
          {entry.year}
        </span>
      </div>
      <p className="mt-3 text-sm font-medium text-slate-700">{entry.journal}</p>
      <p className="mt-2 text-sm text-slate-600">
        <HighlightYueWu authors={entry.authors} />
      </p>
    </li>
  );
}

export default function PublicationPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6 md:py-12">
      <section>
        <h1
          className="text-3xl text-slate-900 md:text-4xl"
          style={{
            fontFamily: 'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
          }}
        >
          Publications
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600 md:text-base">
          Research outputs related to groundwater treatment, arsenic removal,
          and electrocoagulation systems.
        </p>

        <ul className="mt-6 space-y-4">
          {sortedPublications.map((item) => (
            <EntryCard key={item.href} entry={item} />
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2
          className="text-3xl text-slate-900 md:text-4xl"
          style={{
            fontFamily: 'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
          }}
        >
          Patents
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600 md:text-base">
          Patent work focused on water purification devices and methods.
        </p>

        <ul className="mt-6 space-y-4">
          {sortedPatents.map((item) => (
            <EntryCard key={item.href} entry={item} />
          ))}
        </ul>
      </section>
    </main>
  );
}



