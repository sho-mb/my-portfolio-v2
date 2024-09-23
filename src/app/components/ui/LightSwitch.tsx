"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

export const LightSwitch = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(".moon", {
        display: "none",
        duration: 2,
      });

      tl.to(".sunButton", {
        x: 50,
        duration: 2,
      });

      tl.to(".sun", {
        display: "block",
        duration: 2,
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: "#slideIn",
        start: "bottom top",
        end: "+=100%",
        scrub: true,
        markers: true,
      });
    },
    { scope: container }
  );
  return (
    <>
      <div
        ref={container}
        className="relative w-48 h-20 border-solid border-black border-2 rounded-full bg-orange-300 shadow-inner shadow-orange-800 "
      >
        <div className="sunButton absolute left-1/3 translate-y-[-50%] translate-x-[-80%] top-1/2  w-16 h-16 border-solid border-black border-2 bg-gray-100 shadow-md shadow-black flex items-center justify-center text-3xl rounded-full">
          <span className="moon">🌙 </span>
          <span className="sun hidden">🌞</span>
        </div>
      </div>
    </>
  );
};
