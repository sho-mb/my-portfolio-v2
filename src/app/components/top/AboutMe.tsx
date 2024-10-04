"use client";

import React, { useRef } from "react";
import { MyProfilePicture } from "../ui/MyProfilePicture";
import { AboutMeText } from "../ui/AboutMeText";
import { SnsIcons } from "../ui/SnsIcons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { AnimationButton } from "../ui/AnimationButton";

export const AboutMe = () => {
  const container = useRef(null);

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".profilePicture", {
        opacity: 0,
        yPercent: 10,
        duration: 5,
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: "#aboutMe",
        start: "top center",
        end: "+=200",
        scrub: true,
      });
    },
    { scope: container }
  );

  return (
    <div className="w-full h-full" ref={container}>
      <section className="second w-full h-full" id="aboutMe">
        <div className="container m-auto flex md:flex-row flex-col lg:gap-40 md:gap-16 gap-4 justify-center items-center">
          <div className="profilePicture">
            <MyProfilePicture />
          </div>
          <div className="flex flex-col gap-4">
            <AboutMeText />
            <SnsIcons />
            <div className="mt-8">
              <AnimationButton title="More about me" path="/about" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
