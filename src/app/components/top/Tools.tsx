"use client";

import { crimson_text } from "@/app/font";
import { tools } from "@/const/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

export const Tools = () => {
  const toolContainer = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const sectionTitle = "TOOLS";
  const splitTitle = sectionTitle.split("");

  useGSAP(
    () => {
      const splitText = gsap.utils.toArray(".splitText") as HTMLElement[];

      splitText.forEach((text, index) => {
        gsap.from(text, {
          yPercent: 20,
          opacity: 0,
          delay: index * 0.5,
          scrollTrigger: {
            trigger: toolContainer.current,
            start: "top center",
            end: "+=100",
          },
        });
      });

      const skills = gsap.utils.toArray(".skills") as HTMLElement[];

      skills.forEach((skill, index) => {
        gsap.from(skill, {
          xPercent: 20,
          opacity: 0,
          duration: 1,
          delay: index % 2 === 0 ? 1 : 0.5,
          scrollTrigger: {
            trigger: toolContainer.current,
            start: "top center",
            end: "+=100",
          },
        });
      });
    },
    { scope: toolContainer }
  );

  return (
    <section ref={toolContainer} className="container m-auto h-full pb-40">
      <div
        className={`${crimson_text.className} flex text-[100px] font-extrabold`}
      >
        {splitTitle.map((t, index) => (
          <div key={index} className="splitText">
            {t}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2">
        {tools.map((deta) => (
          <div key={deta.id}>
            <div className="flex gap-4 mt-8">
              <div>{deta.id}</div>
              <div className="text-2xl font-bold">{deta.title}</div>
            </div>
            <ul className="flex flex-wrap gap-2 mt-4">
              {deta.skills.map((skill, index) => (
                <li
                  className="px-4 py-2 border-2 border-solid border-red-500 w-fit rounded-full skills"
                  key={index}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
