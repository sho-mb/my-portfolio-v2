"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

export const BollAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      const balls = gsap.utils.toArray<HTMLElement>(".ball");

      balls.forEach((ball, index) => {
        gsap.from(ball, {
          opacity: 0,
          scale: 0,
          x: -50,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ball,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative h-full w-full">
      <div className="w-12 h-12 bg-black rounded-full absolute -top-5 -left-5 ball"></div>
      <div className="w-24 h-24 bg-black rounded-full absolute top-8 left-1/3 ball"></div>
      <div className="w-16 h-16 bg-black rounded-full absolute bottom-8 right-10 ball"></div>
    </section>
  );
};
