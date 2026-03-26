"use client";
import { NavList } from "./navlist";

export const Sidebar = () => {
  return (
    <div className="w-64 bg-secondary text-white h-full">
      <div className="p-4">
        <span className="text-2xl font-bold"></span>
        <p className="text-xs"></p>
      </div>
      <NavList setIsNavOpen={() => {}} />
    </div>
  );
};
