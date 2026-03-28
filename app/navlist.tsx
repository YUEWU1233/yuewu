"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <li className="relative">
      {isActive && (
        <span className="absolute inset-y-2 left-0 w-1 rounded-r-full bg-emerald-300" />
      )}
      <Link
        href={href}
        className={`flex w-full items-center rounded-xl px-3 py-2.5 transition-all duration-200 ${
          isActive
            ? "bg-white/14 text-white shadow-sm shadow-black/10"
            : "text-emerald-50/80 hover:bg-white/10 hover:text-white"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export const NavList = ({
  setIsNavOpen,
}: {
  setIsNavOpen: (open: boolean) => void;
}) => {
  return (
    <div
      className="bg-transparent px-4 pb-5 pt-1 text-white"
      onClick={() => setIsNavOpen(false)}
    >
      <ul className="flex flex-col space-y-1.5">
        <NavItem href="/">
          <div className="flex items-center space-x-2.5">
            <span className="text-base">🏠</span>
            <span>About me</span>
          </div>
        </NavItem>
        <NavItem href="/Projects">
          <div className="flex items-center space-x-2.5">
            <span className="text-base">🌱</span>
            <span>Projects</span>
          </div>
        </NavItem>
        <NavItem href="/Publication">
          <span className="flex items-center space-x-2.5">
            <span className="text-base">📚</span>
            <span>Publication</span>
          </span>
        </NavItem>
        <NavItem href="/CV">
          <div className="flex items-center space-x-2.5">
            <span className="text-base">📄</span>
            <span>CV</span>
          </div>
        </NavItem>
        <NavItem href="/Gallery">
          <div className="flex items-center space-x-2.5">
            <span className="text-base">🖼️</span>
            <span>Gallery</span>
          </div>
        </NavItem>
      </ul>
    </div>
  );
};
