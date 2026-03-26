"use client";

import Image from "next/image";
import BackButton from "../BackButton";
import { useEffect, useState } from "react";

type CountryWallProps = {
  title: string;
  images: Array<{ src: string; alt: string }>;
  interval?: number;
};

export default function CountryWall({
  title,
  images,
  interval = 2500,
}: CountryWallProps) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const showImg = (newIdx: number) => {
    setIdx((newIdx + images.length) % images.length);
  };

  const next = () => showImg(idx + 1);
  const prev = () => showImg(idx - 1);

  const currentImage = images[idx];

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6">
        <BackButton href="/Gallery" />
      </div>

      <section className="rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-sm md:p-8">
        <h1 className="text-2xl font-semibold text-slate-900 md:text-4xl">
          {title}
        </h1>

        <div className="mt-6">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-slate-50">
            <button
              type="button"
              aria-label="Previous photo"
              onClick={prev}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-lg font-semibold text-slate-700 shadow backdrop-blur transition-colors hover:bg-white"
            >
              &lt;
            </button>

            <div className="relative h-[52vh] min-h-[320px] w-full md:h-[62vh] md:min-h-[420px]">
              <Image
                src={currentImage.src}
                alt={currentImage.alt || `Gallery Photo ${idx + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <button
              type="button"
              aria-label="Next photo"
              onClick={next}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-lg font-semibold text-slate-700 shadow backdrop-blur transition-colors hover:bg-white"
            >
              &gt;
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {images.map((image, dotIdx) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Go to photo ${dotIdx + 1}`}
                onClick={() => showImg(dotIdx)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  dotIdx === idx ? "bg-emerald-700" : "bg-emerald-200"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
