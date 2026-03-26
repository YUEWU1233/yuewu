import BackButton from "../BackButton";

type ComingSoonCountryProps = {
  countryName: string;
};

export default function ComingSoonCountry({ countryName }: ComingSoonCountryProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6">
        <BackButton href="/Gallery" />
      </div>

      <section className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
          Country Gallery
        </p>
        <h1 className="mt-2 text-3xl text-slate-900 md:text-4xl">{countryName}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
          Coming soon. Photos for this country will be uploaded in a future update.
        </p>
      </section>
    </main>
  );
}
