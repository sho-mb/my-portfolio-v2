"use client";
import React from "react";
import { HamburgerMenu } from "./HamburgerMenu";

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
        <h1 className="text-xl">SHO DEVELOPER</h1>
        <HamburgerMenu menuItems={menuItems} />
      </div>
    </header>
  );
};
