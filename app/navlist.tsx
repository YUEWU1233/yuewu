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
    <li
      className={`p-2 rounded-sm ${
        isActive ? "bg-secondary-darker" : "hover:bg-secondary-darker"
      }`}
    >
      <Link
        href={href}
        className={isActive ? "text-white" : "text-gray-300 hover:text-white"}
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
      className="bg-secondary px-4 py-2 text-white"
      onClick={() => setIsNavOpen(false)}
    >
      <ul className="flex flex-col space-y-1">
        <NavItem href="/">
          <div className="flex items-center space-x-2">
            <span>🏠</span>
            <span>About me</span>
          </div>
        </NavItem>
        <NavItem href="/Projects">
          <div className="flex items-center space-x-2">
            <span>🌱</span>
            <span>Projects</span>
          </div>
        </NavItem>
        <NavItem href="/Publication">
          <span className="flex items-center space-x-2">
            <span>📚</span>
            <span>Publication</span>
          </span>
        </NavItem>
        <NavItem href="/CV">
          <div className="flex items-center space-x-2">
            <span>📄</span>
            <span>CV</span>
          </div>
        </NavItem>
        <NavItem href="/Gallery">
          <div className="flex items-center space-x-2">
            <span>🖼️</span>
            <span>Gallery</span>
          </div>
        </NavItem>
        
      </ul>
    </div>
  );
};
