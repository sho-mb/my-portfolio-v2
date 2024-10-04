"use client";
import { crimson_text } from "@/app/font";
import { solutions } from "@/const/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

export const Solution = () => {
  const solutionContainer = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".cardItem") as HTMLElement[];
      console.log(cards);
      cards.forEach((card, index) => {
        gsap.from(card, {
          y: 20,
          opacity: 0,
          duration: 1,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: solutionContainer.current,
            start: "top center",
            end: "+=200",
          },
        });
      });
    },
    { scope: solutionContainer }
  );

  return (
    <div className="text-black text-center pb-20" ref={solutionContainer}>
      <div className={`${crimson_text.className} text-3xl font-bold mb-20`}>
        What I can bring to you
      </div>
      <div>
        <ul className="grid grid-cols-4 gap-4">
          {solutions.map((solution, index) => (
            <li
              key={index}
              className={`cardItem w-full h-[400px] border-2 border-black rounded-2xl font-bold text-xl justify-between flex flex-col p-4`}
              style={{ backgroundColor: solution.color }}
            >
              <div className="text-center text-[100px] h-full flex justify-center items-center">
                {solution.icon}
              </div>
              <div className={`justify-end`}>{solution.titie}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
