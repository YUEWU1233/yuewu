import { withBasePath } from "../lib/basePath";

export default function ResumePage() {
  const pdfUrl = withBasePath("/documents/Yue_CV_gen.pdf");

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1
          className="text-3xl text-slate-900 md:text-4xl"
          style={{
            fontFamily:
              'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
          }}
        >
          Curriculum Vitae
        </h1>
        <div className="flex flex-wrap gap-3">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-50"
          >
            Open PDF
          </a>
          <a
            href={pdfUrl}
            download="Yue_Wu_CV.pdf"
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm">
        <object
          data={pdfUrl}
          type="application/pdf"
          aria-label="Yue Wu curriculum vitae"
          className="block h-[80vh] min-h-[500px] w-full"
        >
          <p className="p-6 text-sm leading-7 text-slate-700">
            Preview unavailable in this browser.{' '}
            <a href={pdfUrl} className="font-semibold text-emerald-700 underline">
              Open the CV as a PDF
            </a>
            .
          </p>
        </object>
      </div>
    </main>
  );
}
