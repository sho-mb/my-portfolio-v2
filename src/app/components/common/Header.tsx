"use client";
import React, { useState, useEffect, useRef } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const menuItems = [
    {
      title: "HOME",
      path: "/",
    },
    {
      title: "ABOUT",
      path: "/about",
    },
    {
      title: "WORKS",
      path: "/portfolio",
    },
    {
      title: "CONTACT",
      path: "/contact",
    },
  ];

  return (
    <header className="py-[28px] flex items-center bg-black">
      <div className="container m-auto relative">
        <Link href={"/"}>
          <h1 className="text-xl">SHO DEVELOPER</h1>
        </Link>
        <div ref={menuRef}>
          <HamburgerMenu
            menuItems={menuItems}
            isMenuOpen={isMenuOpen}
            handleClick={handleClick}
          />
        </div>
      </div>
    </header>
  );
};
