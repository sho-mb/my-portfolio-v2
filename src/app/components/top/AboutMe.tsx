"use client";

import React, { useRef } from "react";
import { MyProfilePicture } from "../ui/MyProfilePicture";
import { AboutMeText } from "../ui/AboutMeText";
import { SnsIcons } from "../ui/SnsIcons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { MatrixAnimation } from "../ui/MatrixAnimation";

export const AboutMe = () => {
  const container = useRef(null);

  // gsap.registerPlugin(useGSAP, ScrollTrigger);
  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline();
  //     tl.from(".first", { yPercent: -100 });
  //     // tl.from(".second", { yPercent: 100 });
  //     ScrollTrigger.create({
  //       animation: tl,
  //       trigger: "#hero",
  //       start: "top top",
  //       end: "+=4000",
  //       scrub: true,
  //       pin: true,
  //       anticipatePin: 1,
  //     });
  //   },
  //   { scope: container }
  // );

  return (
    <div className="w-full h-screen" ref={container}>
      {/* <section className="absolute w-full h-screen matrix z-20">
        <MatrixAnimation />
      </section> */}
      <section className="second w-full h-full bg-white" id="aboutMe">
        <div className="container m-auto flex flex-row gap-20 justify-center items-center">
          <div className="">
            <MyProfilePicture />
          </div>
          <div className="flex flex-col gap-4">
            <AboutMeText />
            <SnsIcons />
          </div>
        </div>
      </section>
    </div>
  );
};
