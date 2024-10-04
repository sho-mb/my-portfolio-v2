import React from "react";

export const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="w-full container m-auto text-white text-sm md:flex md:justify-between md:text-left text-center py-4">
        <div>
          <small>2024 © Edition</small>
        </div>
        <div>
          <small>Menu</small>
          <div className="flex justify-center gap-4">
            <a href="/">Top</a>
            <a href="/about">About</a>
            <a href="/portfolio">Works</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
