"use client";
import { NavList } from "./navlist";

export const Sidebar = () => {
  return (
    <aside className="h-full w-72 border-r border-white/10 bg-gradient-to-b from-secondary to-secondary-darker text-white shadow-xl shadow-black/10">
      <div className="p-5">
        <div className="rounded-2xl border border-white/15 bg-white/8 p-4 backdrop-blur-sm">
          <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-100/90">
            Personal Portfolio
          </p>
          <h2
            className="mt-1 text-2xl text-white"
            style={{
              fontFamily:
                'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
            }}
          >
            Yue Wu
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-emerald-50/85">
            Sustainability, data, and storytelling through projects.
          </p>
        </div>
      </div>
      <NavList setIsNavOpen={() => {}} />
    </aside>
  );
};
