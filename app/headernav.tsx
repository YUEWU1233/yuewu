"use client";

import Image from "next/image";
import Link from "next/link";
import { NavList } from "./navlist";
import React, { useState, useEffect, useRef } from "react";

export default function HeaderNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 bg-secondary py-2 px-4"
        ref={navRef}
      >
        <div className="container mx-auto flex text-white items-center justify-between">
          <button className="" onClick={() => setIsNavOpen(!isNavOpen)}>
            <Image
              src="hamburger-menu.svg"
              alt="Menu"
              width={24}
              height={24}
              className=""
            />
          </button>
          <Link
            href="/"
            className="text-lg hover:text-gray-200 transition-colors"
          >
            Yue Wu's Page
          </Link>
          <Link href="/" className="flex items-center">
            <svg
              className="w-6 h-6 text-white hover:text-gray-200 transition-colors"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
          </Link>
        </div>
        {isNavOpen && <NavList setIsNavOpen={setIsNavOpen} />}
      </nav>
      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-12"></div>
    </>
  );
}
