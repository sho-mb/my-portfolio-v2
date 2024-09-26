import React from "react";

export const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="w-full container m-auto text-white text-sm flex justify-between py-4">
        <div>
          <small>2024 © Edition</small>
        </div>
        <div>
          <small>Social</small>
          <div className="flex justify-center gap-4">
            <a href="https://x.com/kisho_art_" target="_blank">
              X
            </a>
            <a href="www.linkedin.com/in/sho-developer" target="_blank">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/kisho.tamura.5" target="_blank">
              Facebook
            </a>
            <a href="https://github.com/xoxkishoxox" target="_blank">
              Github
            </a>
            <a href="https://note.com/cambo/" target="_blank">
              Note
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
