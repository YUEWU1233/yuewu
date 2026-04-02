import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "./lib/basePath";

export default function Home() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 12% 14%, #d5efe8 0%, #c8e8df 24%, #b6dfd2 48%, #a4d2c4 100%)",
      }}
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-64 w-64 rounded-full bg-amber-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-10 md:py-14">
        <section className="rounded-3xl border border-white/60 bg-white/75 p-6 shadow-xl backdrop-blur md:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
                <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                Sustainability Researcher
              </p>
              <h1
                className="text-4xl leading-tight text-slate-900 md:text-6xl"
                style={{
                  fontFamily:
                    'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
                }}
              >
                Yue Wu
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
                I apply life cycle assessment and carbon modeling to identify environmental hotspots, design decarbonization strategies, and support decision-making.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/Projects"
                  className="rounded-full bg-[#4C594F] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#35403A]"
                >
                  View Projects
                </Link>
                <Link
                  href="/CV"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-transform duration-300 hover:-translate-y-0.5 hover:border-slate-500"
                >
                  Explore CV
                </Link>
              </div>
            </div>

            <aside className="rounded-2xl border border-amber-100 bg-amber-50 p-5 text-slate-800 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-2xl border border-white/20">
                  <Image
                    src={withBasePath("/image1.jpg")}
                    alt="Portrait of Yue Wu"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500">
                    Based in
                  </p>
                  <p className="text-lg font-semibold">Lausanne, Switzerland</p>
                </div>
              </div>

              <dl className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-amber-100 bg-white/70 p-3">
                  <dt className="text-slate-500 text-xs md:text-sm">Focus</dt>
                  <dd className="mt-1 font-semibold text-slate-900 text-xs md:text-sm">LCA & MFA</dd>
                </div>
                <div className="rounded-xl border border-amber-100 bg-white/70 p-3">
                  <dt className="text-slate-500 text-xs md:text-sm">Research</dt>
                  <dd className="mt-1 break-words font-semibold leading-snug text-slate-900 text-xs md:text-sm">Sustainable Systems & Decarbonization</dd>
                </div>
                <div className="rounded-xl border border-amber-100 bg-white/70 p-3">
                  <dt className="text-slate-500 text-xs md:text-sm">Current</dt>
                  <dd className="mt-1 font-semibold text-slate-900 text-xs md:text-sm">UNEP Intern</dd>
                </div>
                <div className="rounded-xl border border-amber-100 bg-white/70 p-3">
                  <dt className="text-slate-500 text-xs md:text-sm">Open To</dt>
                  <dd className="mt-1 font-semibold text-slate-900 text-xs md:text-sm">Research & Consulting</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/Projects"
            className="group min-w-0 rounded-2xl border border-white/50 bg-white/75 p-6 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.08em] md:tracking-[0.14em] text-slate-500">
              Work
            </p>
            <h2
              className="mt-2 break-words text-2xl text-slate-900"
              style={{
                fontFamily:
                  'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
              }}
            >
              Projects
            </h2>
            <p className="mt-2 break-words text-sm text-slate-700">
              Interesting academic projects.
            </p>
          </Link>

          <Link
            href="/Publication"
            className="group min-w-0 rounded-2xl border border-white/50 bg-white/75 p-6 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.08em] md:tracking-[0.14em] text-slate-500">
              Research
            </p>
            <h2
              className="mt-2 break-words text-2xl text-slate-900"
              style={{
                fontFamily:
                  'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
              }}
            >
              Publications
            </h2>
            <p className="mt-2 break-words text-sm text-slate-700">
              Papers and patents on water safety.
            </p>
          </Link>

          <Link
            href="/Gallery"
            className="group min-w-0 rounded-2xl border border-white/50 bg-white/75 p-6 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.08em] md:tracking-[0.14em] text-slate-500">
              Photography
            </p>
            <h2
              className="mt-2 break-words text-2xl text-slate-900"
              style={{
                fontFamily:
                  'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
              }}
            >
              Gallery
            </h2>
            <p className="mt-2 break-words text-sm text-slate-700">
              Travel photos from places and everyday moments.
            </p>
          </Link>
        </section>

        <section className="mt-10 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur md:p-8">
          <h2
            className="text-2xl text-slate-900 md:text-3xl"
            style={{
              fontFamily: 'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
            }}
          >
            What I Care About
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article className="min-w-0 rounded-2xl bg-emerald-50 p-4">
              <h3
                className="break-words text-2xl font-semibold text-slate-900"
                style={{
                  fontFamily:
                    'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
                }}
              >
                Traceability
              </h3>
              <p className="mt-2 break-words text-sm text-slate-700">
                Making supply chains understandable for users, regulators, and
                businesses.
              </p>
            </article>
            <article className="min-w-0 rounded-2xl bg-amber-50 p-4">
              <h3
                className="break-words text-2xl font-semibold text-slate-900"
                style={{
                  fontFamily:
                    'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
                }}
              >
                Sustainability
              </h3>
              <p className="mt-2 break-words text-sm text-slate-700">
                Building product experiences that extend lifespan and reduce
                waste.
              </p>
            </article>
            <article className="min-w-0 rounded-2xl bg-cyan-50 p-4">
              <h3
                className="break-words text-2xl font-semibold text-slate-900"
                style={{
                  fontFamily:
                    'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
                }}
              >
                Clarity
              </h3>
              <p className="mt-2 break-words text-sm text-slate-700">
                Turning complex environmental data into readable, useful
                interfaces.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur md:p-8">
          <h2
            className="text-2xl text-slate-900 md:text-3xl"
            style={{
              fontFamily:
                'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
            }}
          >
            Skills
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article className="min-w-0 rounded-2xl bg-emerald-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-800">
                Sustainability Analytics
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="max-w-full break-words rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">LCA</span>
                <span className="max-w-full break-words rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">MFA</span>
                <span className="max-w-full break-words rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">Carbon Footprint</span>
                <span className="max-w-full break-words rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">Decarbonization Strategy</span>
              </div>
            </article>

            <article className="min-w-0 rounded-2xl bg-cyan-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-cyan-900">
                Data & Modeling
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="max-w-full break-words rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">Python</span>
                <span className="max-w-full break-words rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">Excel</span>
                <span className="max-w-full break-words rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">Data Visualization</span>
                <span className="max-w-full break-words rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">Scenario Analysis</span>
                <span className="max-w-full break-words rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">SQL</span>
                <span className="max-w-full break-words rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">Power BI</span>
              </div>
            </article>

            <article className="min-w-0 rounded-2xl bg-amber-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-amber-900">
                Field & Communication
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="max-w-full break-words rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">Project Coordination</span>
                <span className="max-w-full break-words rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">Stakeholder Engagement</span>
                <span className="max-w-full break-words rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">Technical Writing</span>
                <span className="max-w-full break-words rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">Workshop Support</span>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur md:p-8">
          <h2
            className="text-2xl text-slate-900 md:text-3xl"
            style={{
              fontFamily:
                'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
            }}
          >
            Education
          </h2>
          <p className="mt-2 text-sm text-slate-600">Academic foundation in sustainability, engineering, and systems thinking.</p>
          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">Lausanne, Switzerland</p>
                  <h3 className="mt-2 flex items-center gap-2 text-xl font-semibold text-slate-900">
                    <img
                      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e8-1f1ed.svg"
                      alt="Switzerland flag"
                      width="18"
                      height="18"
                      className="h-[18px] w-[18px] shrink-0"
                    />
                    <span>EPFL-UNIL-IMD (E4S)</span>
                  </h3>
                </div>
                <span className="shrink-0 rounded-full border border-emerald-200 bg-white/90 px-3 py-1 text-xs font-medium text-emerald-800">2023 - 2025</span>
              </div>
              <div className="mt-4 rounded-xl bg-transparent p-4">
                <p className="text-sm font-medium text-slate-800">MSc. in Sustainable Management &amp; Technology</p>
                <p className="mt-1 text-xs uppercase tracking-[0.08em] text-slate-500">Sept 2023 - Aug 2025</p>
              </div>
            </article>

            <article className="rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-cyan-100/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-800">Beijing, China</p>
                  <h3 className="mt-2 flex items-center gap-2 text-xl font-semibold text-slate-900">
                    <img
                      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e8-1f1f3.svg"
                      alt="China flag"
                      width="18"
                      height="18"
                      className="h-[18px] w-[18px] shrink-0"
                    />
                    <span>Tsinghua University</span>
                  </h3>
                </div>
                <span className="shrink-0 rounded-full border border-cyan-200 bg-white/90 px-3 py-1 text-xs font-medium text-cyan-900">2014 - 2021</span>
              </div>
              <div className="mt-4 space-y-3 rounded-xl bg-transparent p-4">
                <div>
                  <p className="text-sm font-medium text-slate-800">MSc. in Environmental Science &amp; Engineering</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.08em] text-slate-500">Sept 2018 - Jun 2021</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">BEng. in Environmental Engineering</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.08em] text-slate-500">Sept 2014 - Jul 2018</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  <img
                    src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1f8.svg"
                    alt="United States flag"
                    width="14"
                    height="14"
                    className="h-[14px] w-[14px] shrink-0"
                  />
                  <span>Undergraduate thesis completed at Penn State University</span>
                </div>
                <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  Minor in Psychology
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur md:p-8">
          <h2
            className="text-2xl text-slate-900 md:text-3xl"
            style={{
              fontFamily:
                'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
            }}
          >
            Language I Speak
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-emerald-50 p-4">
              <h3
                className="text-lg font-semibold text-slate-900"
                style={{
                  fontFamily:
                    'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
                }}
              >
                Chinese (Native)
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                我喜欢把复杂的信息变得清晰、可理解。
              </p>
            </article>

            <article className="rounded-2xl bg-cyan-50 p-4">
              <h3
                className="text-lg font-semibold text-slate-900"
                style={{
                  fontFamily:
                    'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
                }}
              >
                English (Working Proficiency)
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                I can collaborate across teams and present ideas clearly.
              </p>
            </article>

            <article className="rounded-2xl bg-amber-50 p-4">
              <h3
                className="text-lg font-semibold text-slate-900"
                style={{
                  fontFamily:
                    'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
                }}
              >
                French (Intermediate)
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Je peux discuter de sujets quotidiens et expliquer mes projets simplement.
              </p>
            </article>

            <article className="rounded-2xl bg-slate-100 p-4">
              <h3
                className="text-lg font-semibold text-slate-900"
                style={{
                  fontFamily:
                    'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
                }}
              >
                German (Beginner)
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Entschuldigung?
              </p>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-amber-50 p-6 text-slate-800 shadow-xl md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Contact
              </p>
              <h2
                className="mt-2 text-2xl md:text-3xl"
                style={{
                  fontFamily:
                    'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
                }}
              >
                Let us build something meaningful.
              </h2>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-4 md:shrink-0">
              <a
                href="mailto:yue.wu14@gmail.com"
                aria-label="Email"
                className="rounded-full border border-slate-300 p-2 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="text-slate-700"
                >
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                  <path d="M4.5 7l7.5 5.5L19.5 7" />
                </svg>
              </a>
              <a
                href="https://www.github.com/YUEWU1233"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-slate-300 p-2 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/70"
              >
                <picture>
                  <source
                    media="(prefers-color-scheme: dark)"
                    srcSet="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github-dark.svg"
                  />
                  <source
                    media="(prefers-color-scheme: light)"
                    srcSet="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg"
                    width="32"
                    height="32"
                    alt="GitHub"
                    className="h-8 w-8"
                    style={{ filter: "grayscale(1) brightness(0.35)" }}
                  />
                </picture>
              </a>
              <a
                href="https://www.linkedin.com/in/yue-wu-a433871b1"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-slate-300 p-2 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/70"
              >
                <picture>
                  <source
                    media="(prefers-color-scheme: dark)"
                    srcSet="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin-dark.svg"
                  />
                  <source
                    media="(prefers-color-scheme: light)"
                    srcSet="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg"
                    width="32"
                    height="32"
                    alt="LinkedIn"
                    className="h-8 w-8"
                    style={{ filter: "grayscale(1) brightness(0.35)" }}
                  />
                </picture>
              </a>
              <a
                href="https://www.instagram.com/woooo_yue/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-slate-300 p-2 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/70"
              >
                <picture>
                  <source
                    media="(prefers-color-scheme: dark)"
                    srcSet="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram-dark.svg"
                  />
                  <source
                    media="(prefers-color-scheme: light)"
                    srcSet="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg"
                    width="32"
                    height="32"
                    alt="Instagram"
                    className="h-8 w-8"
                    style={{ filter: "grayscale(1) brightness(0.35)" }}
                  />
                </picture>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}



