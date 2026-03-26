import Link from "next/link";
import Image from "next/image";

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
                <a
                  href="/CV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-transform duration-300 hover:-translate-y-0.5 hover:border-slate-500"
                >
                  Explore CV
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 text-slate-800 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-2xl border border-white/20">
                  <Image
                    src="/image1.jpg"
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

              <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-emerald-100 bg-white/70 p-3">
                  <dt className="text-slate-500">Focus</dt>
                  <dd className="mt-1 font-semibold text-slate-900">LCA & MFA</dd>
                </div>
                <div className="rounded-xl border border-emerald-100 bg-white/70 p-3">
                  <dt className="text-slate-500">Research</dt>
                  <dd className="mt-1 font-semibold text-slate-900">Sustainable Systems & Decarbonization</dd>
                </div>
                <div className="rounded-xl border border-emerald-100 bg-white/70 p-3">
                  <dt className="text-slate-500">Current</dt>
                  <dd className="mt-1 font-semibold text-slate-900">UNEP Intern</dd>
                </div>
                <div className="rounded-xl border border-emerald-100 bg-white/70 p-3">
                  <dt className="text-slate-500">Open To</dt>
                  <dd className="mt-1 font-semibold text-slate-900">Research & Consulting</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Link
            href="/Projects"
            className="group rounded-2xl border border-white/50 bg-white/75 p-6 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Work
            </p>
            <h2
              className="mt-2 text-2xl text-slate-900"
              style={{
                fontFamily:
                  'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
              }}
            >
              Projects
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Interesting academic projects.
            </p>
          </Link>

          <Link
            href="/Publication"
            className="group rounded-2xl border border-white/50 bg-white/75 p-6 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Research
            </p>
            <h2
              className="mt-2 text-2xl text-slate-900"
              style={{
                fontFamily:
                  'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
              }}
            >
              Publications
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Papers and patents on water safety.
            </p>
          </Link>

          <Link
            href="/Gallery"
            className="group rounded-2xl border border-white/50 bg-white/75 p-6 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Photography
            </p>
            <h2
              className="mt-2 text-2xl text-slate-900"
              style={{
                fontFamily:
                  'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
              }}
            >
              Gallery
            </h2>
            <p className="mt-2 text-sm text-slate-700">
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
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className="rounded-2xl bg-emerald-50 p-4">
              <h3
                className="text-2xl font-semibold text-slate-900"
                style={{
                  fontFamily:
                    'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
                }}
              >
                Traceability
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Making supply chains understandable for users, regulators, and
                businesses.
              </p>
            </article>
            <article className="rounded-2xl bg-amber-50 p-4">
              <h3
                className="text-2xl font-semibold text-slate-900"
                style={{
                  fontFamily:
                    'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
                }}
              >
                Sustainability
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Building product experiences that extend lifespan and reduce
                waste.
              </p>
            </article>
            <article className="rounded-2xl bg-cyan-50 p-4">
              <h3
                className="text-2xl font-semibold text-slate-900"
                style={{
                  fontFamily:
                    'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
                }}
              >
                Clarity
              </h3>
              <p className="mt-2 text-sm text-slate-700">
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

        <section className="mt-10 rounded-3xl bg-emerald-50 p-6 text-slate-800 shadow-xl md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
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
            <div className="mt-2 flex items-center gap-4">
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



