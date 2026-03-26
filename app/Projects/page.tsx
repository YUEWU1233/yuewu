import Image from "next/image";
import Link from "next/link";

type ProjectCard = {
  title: string;
  href: string;
  image: string;
  alt: string;
};

const projects: ProjectCard[] = [
  {
    title: "Digital Product Passport and Dynamic Carbon Calculator for Logitech",
    href: "/Projects/Project4",
    image: "/project4.png",
    alt: "Digital Product Passport project preview",
  },
  {
    title: "Carbon Reduction Project for Sonceboz",
    href: "/Projects/Project1",
    image: "/project1.jpg",
    alt: "Carbon reduction project preview",
  },
  {
    title: "Life Cycle Assessment for Bio Lab Tube Comparison",
    href: "/Projects/Project2",
    image: "/project2.jpg",
    alt: "Life cycle assessment project preview",
  },
  {
    title: "Machine Learning for French Text Analyzing",
    href: "/Projects/Project3",
    image: "/project3.jpg",
    alt: "Machine learning text analysis project preview",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 md:mb-10">
        <h1
          className="text-3xl text-slate-900 md:text-4xl"
          style={{
            fontFamily: 'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
          }}
        >
          Projects
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600 md:text-base">
          Selected work in sustainability, lifecycle analytics, digital product
          passport design, and applied machine learning.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.href}
            href={project.href}
            className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-5">
              <h2 className="text-base font-semibold leading-snug text-slate-900 md:text-lg">
                {project.title}
              </h2>
              <p className="mt-3 text-sm font-medium text-emerald-700">
                View project details →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}



