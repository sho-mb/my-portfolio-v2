"use client";

import { crimson_text } from "@/app/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import React from "react";
import { Scroll } from "../ui/Scroll";

export const Hero = () => {
  gsap.registerPlugin(useGSAP, TextPlugin);
  const tl = gsap.timeline({ repeat: 0 });
  useGSAP(() => {
    tl.to("#target", {
      duration: 3,
      text: "TAMURA KISHO'S PORTFOLIO",
      delay: 2,
    }).to("#target", {
      duration: 4,
      text: "Thank you for your visiting",
      delay: 2,
    });
  });

  return (
    <section
      id="hero"
      className="bg-black min-h-[100vh] justify-center items-center text-center"
    >
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%]">
        <h1 id="target" className={`${crimson_text.className} text-7xl`}>
          THIS IS
        </h1>
        <div className="mt-4">
          <div>FRONTEND DEVELOPER</div>
          <div>WEB DEVELOPER</div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 translate-x-[-50%]">
        <Scroll />
      </div>
    </section>
  );
};
