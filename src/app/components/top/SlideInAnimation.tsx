import { bebas_text, crimson_text } from "@/app/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { LightSwitch } from "../ui/LightSwitch";
import TextPlugin from "gsap/TextPlugin";

export const SlideInAnimation = () => {
  const slideContainer = useRef(null);

  gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

  useGSAP(
    () => {
      const secondTl = gsap.timeline();

      secondTl.to(".helloOne", {
        duration: 5,
        text: "System.out.println(&quot;Hello world&quot;)",
        ease: "steps(24)",
      });

      ScrollTrigger.create({
        animation: secondTl,
        trigger: "#slideIn",
        start: "center center",
        end: "+=300",
        scrub: true,
      });

      const tl = gsap.timeline();

      tl.to(".background", {
        backgroundColor: "#ffffff",
        duration: 6,
      });

      tl.to(".switchText", {
        text: "It's okay now)",
        color: "black",
        duration: 3,
      });

      tl.to(".helloOne", {
        duration: 3,
        opacity: 0,
      });

      tl.from(".helloTwo", {
        opacity: 0,
        y: 100,
        duration: 5,
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: "#slideIn",
        start: "70% center",
        end: "+=100%",
        scrub: true,
      });
    },
    { scope: slideContainer }
  );

  return (
    <section
      ref={slideContainer}
      id="slideIn"
      className="relative h-full w-full text-center"
    >
      <div className="bg-black h-full w-full absolute top-0 background">
        <div className="absolute left-1/2 translate-x-[-50%] top-1/3 flex flex-col gap-4 justify-center items-center">
          <LightSwitch />
          <div className="text-5xl text-white switchText">Oups! too dark!</div>
        </div>

        <div
          className={`${bebas_text.className} text-black lg:text-[300px] md:text-[80px] sm:text-[150px] tracking-tighter helloTwo opacity-100 absolute left-1/2 translate-x-[-50%] w-full h-fit bottom-0`}
        >
          HELLO WORLD
        </div>
        <div
          className={`${crimson_text.className} text-white text-[100px] helloOne  opacity-100 absolute left-1/2 translate-x-[-50%] w-full h-fit bottom-0`}
        >
          We all start from here
        </div>
      </div>
    </section>
  );
};
