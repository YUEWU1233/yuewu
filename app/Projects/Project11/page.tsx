import Image from "next/image";
import BackButton from "../../BackButton";
import { withBasePath } from "../../lib/basePath";

const features = [
  {
    title: "Vocabulary from B2 to C2",
    description:
      "Filter vocabulary by level, reveal Chinese translations, and explore French example sentences and noun gender to study words in context.",
  },
  {
    title: "Quick desktop practice",
    description:
      "Use an always-on-top popup for short study sessions. Keyboard shortcuts make it easy to flip cards and move to the next word.",
  },
  {
    title: "Daily learning motivation",
    description:
      "A pixel cat counter tracks card flips toward a daily target of 200. Progress is saved locally, with a celebration when the goal is reached.",
  },
];

export default function Project11Page() {
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
          French Vocabulary Flashcards
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Personal project · Language learning · Desktop application
        </p>

        <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed text-slate-700 md:text-lg">
          A Python desktop application for practicing B2–C2 French vocabulary
          through French–Chinese flashcards, contextual examples, and short daily
          review sessions.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src={withBasePath("/project/project11/french-flashcards.svg")}
            alt="Illustration of French vocabulary cards and B2, C1, C2 level selection"
            width={1200}
            height={750}
            className="h-auto w-full"
            priority
          />
        </div>

        <h2 className="mt-8 text-xl font-semibold text-slate-900 md:text-2xl">
          Project Summary
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          Built to support my own French learning, this application makes
          advanced vocabulary practice easy to fit into a desktop workflow.
          Learners can choose a difficulty level, recall a word before revealing
          its translation, and consult an example sentence. A compact popup keeps
          practice close at hand throughout the day.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <section key={feature.title} className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {feature.description}
              </p>
            </section>
          ))}
        </div>

        <h2 className="mt-8 text-xl font-semibold text-slate-900 md:text-2xl">
          Technical Implementation
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          The interface uses Python and Tkinter, with separate modules for the
          application entry point, user interface, and vocabulary handling.
          Vocabulary can be loaded from JSON or CSV files and normalized by level
          and gender. Daily progress is persisted in a local JSON file. The app
          runs locally without additional third-party Python dependencies.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Python", "Tkinter", "JSON / CSV", "Desktop UI"].map((technology) => (
            <span key={technology} className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
              {technology}
            </span>
          ))}
        </div>
      </article>
    </main>
  );
}
