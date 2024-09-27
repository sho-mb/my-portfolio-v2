"use client";
import React from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import Link from "next/link";

export const Header = () => {
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
      path: "/works",
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
        <HamburgerMenu menuItems={menuItems} />
      </div>
    </header>
  );
};
