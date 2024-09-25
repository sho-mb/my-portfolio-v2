"use client";

import { crimson_text } from "@/app/font";
import { MenuItem } from "@/const/types";
import Link from "next/link";
import { useState } from "react";

export const HamburgerMenu = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        className={`w-[52px] h-[52px] border border-solid rounded-full absolute -top-2 right-3 z-[99] ${
          isMenuOpen ? "border-black" : "border-white"
        }`}
        onClick={handleClick}
      >
        <span
          className={`w-7 block absolute left-[11px] top-[19px] border-1 border-solid transition-transform ${
            isMenuOpen
              ? "translate-y-[5px] -rotate-45 origin-center border-black"
              : "border-white"
          }`}
        />
        <span
          className={`w-7 block absolute left-[11px] bottom-[19px] border-1 border-solid transition-transform ${
            isMenuOpen
              ? "-translate-y-[5px] rotate-45 origin-center border-black"
              : "border-white"
          }`}
        />
      </button>
      <nav
        className={`w-[320px] bg-white p-8 rounded-b-2xl absolute right-0 -top-[300px] z-[89] transiton duration-700 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-[270px] " : "opacity-0"
        }`}
      >
        <ul
          className={`${crimson_text.className} text-black font-semibold text-3xl flex-col flex gap-4`}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
