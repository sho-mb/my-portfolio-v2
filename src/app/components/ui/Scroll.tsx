import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export const Scroll = () => {
  gsap.registerPlugin(useGSAP);
  const tl = gsap.timeline({ repeat: Infinity, repeatDelay: 1 });
  useGSAP(() => {
    tl.to(".animationBorder", {
      height: "4px",
    });
  });
  return (
    <div className="relative">
      <div>scroll</div>
      <div className="mt-2 h-20 border-1 w-0 m-auto animationBorder absolute left-1/2"></div>
    </div>
  );
};
