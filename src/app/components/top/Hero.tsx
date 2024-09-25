"use client";

import { crimson_text } from "@/app/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import React from "react";
import { Scroll } from "../ui/Scroll";
import { ScrollTrigger } from "gsap/all";
import { MatrixAnimation } from "../ui/MatrixAnimation";
import { SlideInAnimation } from "./SlideInAnimation";

export const Hero = () => {
  gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

  const tl = gsap.timeline({ repeat: 0 });
  useGSAP(() => {
    tl.to("#HeroTitle", {
      duration: 3,
      text: "TAMURA KISHO'S PORTFOLIO",
      delay: 2,
    }).to("#HeroTitle", {
      duration: 4,
      text: "Thank you for your visiting",
      delay: 2,
    });

    gsap.to("#HeroTitle", {
      color: "#303030",
      y: -400,
      opacity: 0,
      duration: 5,
      delay: 3,
      scrollTrigger: {
        trigger: "#hero",
        start: "10% top",
        end: "+=1000",
        scrub: true,
      },
    });

    gsap.to(".sub1", {
      color: "#303030",
      x: 300,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#hero",
        start: "10% top",
        end: "+=400",
        scrub: true,
      },
    });

    gsap.to(".sub2", {
      color: "#303030",
      x: -300,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#hero",
        start: "10% top",
        end: "+=400",
        scrub: true,
      },
    });

    gsap.to(".scroll", {
      color: "#303030",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#hero",
        start: "10% top",
        end: "+=400",
        scrub: true,
      },
    });

    gsap.to("#first", { opacity: 100 });
    const slideTl = gsap.timeline();

    slideTl.from("#first", { yPercent: -100 });
    ScrollTrigger.create({
      animation: slideTl,
      trigger: "#hero",
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });
  });

  return (
    <section id="hero">
      <div className="bg-black relative h-screen w-full overflow-hidden ">
        <div className="text-center flex flex-col justify-center items-center absolute z-10 top-1/3 left-1/2 translate-x-[-50%] ">
          <h1
            id="HeroTitle"
            className={`${crimson_text.className} text-7xl text-white`}
          >
            THIS IS
          </h1>
          <div className="mt-4">
            <div className="sub1">FRONTEND DEVELOPER</div>
            <div className="sub2">WEB DEVELOPER</div>
          </div>
        </div>
        <div className="scroll absolute bottom-28 left-1/2 translate-x-[-50%] z-30">
          <Scroll />
        </div>
        <MatrixAnimation />
        <div id="first" className="w-full h-screen absolute z-20 opacity-0">
          <SlideInAnimation />
        </div>
      </div>
    </section>
  );
};
