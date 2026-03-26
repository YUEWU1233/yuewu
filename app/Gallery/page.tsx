import TravelHistoryMap from "./TravelHistoryMap";

export default function GalleryPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 md:mb-10">
        <h1
          className="text-3xl text-slate-900 md:text-4xl"
          style={{
            fontFamily: 'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
          }}
        >
          Gallery
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600 md:text-base">
          A photo wall of travel moments, places, and stories.
        </p>
      </div>

      <TravelHistoryMap />
    </main>
  );
}



