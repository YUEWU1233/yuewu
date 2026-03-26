import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "../lib/basePath";

type GalleryCard = {
  title: string;
  href: string;
  image: string;
  alt: string;
};

const galleryCards: GalleryCard[] = [
  {
    title: "Switzerland",
    href: "/Gallery/Switzerland",
    image: "/Switzerland.jpg",
    alt: "Switzerland travel memories",
  },
  {
    title: "France",
    href: "/Gallery/France",
    image: "/France.jpg",
    alt: "France travel memories",
  },
  {
    title: "Belgium",
    href: "/Gallery/Belgium",
    image: "/Belgium.jpg",
    alt: "Belgium travel memories",
  },
  {
    title: "Netherlands",
    href: "/Gallery/Netherlands",
    image: "/Netherlands.jpg",
    alt: "Netherlands travel memories",
  },
  {
    title: "Greece",
    href: "/Gallery/Greece",
    image: "/Gallery2.jpg",
    alt: "Greece travel memories",
  },
  {
    title: "Hungary",
    href: "/Gallery/Hungary",
    image: "/Hungary.jpg",
    alt: "Hungary travel memories",
  },
  {
    title: "Italy",
    href: "/Gallery/Italy",
    image: "/Florence.jpg",
    alt: "Italy travel memories",
  },
];

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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src={withBasePath(card.image)}
                alt={card.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="px-4 py-3">
              <h2 className="text-base font-semibold text-slate-900">
                {card.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}



