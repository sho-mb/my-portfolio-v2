"use client";

import { bebas_text } from "@/app/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export const Hero = () => {
  const heroContainer = useRef(null);
  gsap.registerPlugin(useGSAP);

  const splitText = "PORTFOLIO".split("");

  useGSAP(
    () => {
      const splitText = gsap.utils.toArray(".splitText") as HTMLElement[];
      splitText.forEach((text, index) => {
        gsap.from(text, {
          yPercent: 20,
          rotateX: -120,
          opacity: 0,
          delay: index * 0.1,
        });
      });
    },
    { scope: heroContainer }
  );

  return (
    <section ref={heroContainer}>
      <div
        className={`heroText ${bebas_text.className} text-[200px] flex justify-center`}
      >
        {splitText.map((t, index) => (
          <div key={index} className="splitText">
            {t}
          </div>
        ))}
      </div>
    </section>
  );
};
