"use client";

import React, { useEffect, useRef, useState } from "react";
import works from "@/app/css/works.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import portfolio1 from "@/assets/img/portfolio1.png";
import portfolio2 from "@/assets/img/portfolio2.png";
import portfolio3 from "@/assets/img/portfolio3.png";
import portfolio4 from "@/assets/img/portfolio4.jpg";
import portfolio5 from "@/assets/img/portfoli5.png";
import portfolio6 from "@/assets/img/portfolio6.png";
import portfolio7 from "@/assets/img/portfolio7.png";
import Link from "next/link";
import { AnimationButton } from "../ui/AnimationButton";
import { crimson_text } from "@/app/font";

export const Works = () => {
  const worksContainer = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const portfolios1 = [
    {
      src: portfolio1,
      link: "/portfolio/1",
    },
    {
      src: portfolio2,
      link: "/portfolio/2",
    },
    {
      src: portfolio3,
      link: "/portfolio/3",
    },
  ];
  const portfolios2 = [
    {
      src: portfolio4,
      link: "/portfolio/4",
    },
    {
      src: portfolio5,
      link: "/portfolio/5",
    },
    {
      src: portfolio6,
      link: "/portfolio/6",
    },
    {
      src: portfolio7,
      link: "/portfolio/7",
    },
  ];

  const portfolios3 = [
    {
      src: portfolio1,
      link: "/portfolio/1",
    },
    {
      src: portfolio2,
      link: "/portfolio/2",
    },
    {
      src: portfolio3,
      link: "/portfolio/3",
    },
  ];

  const [imgWidth, setImgWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const outerWidth = window.outerWidth;
      const width = window.innerWidth;
      const imgWidth = outerWidth < 820 ? width : width / 3;
      setImgWidth(imgWidth);
    };

    handleResize();
  }, []);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray("section") as HTMLElement[];
      sections.forEach((section, index) => {
        const w = section.querySelector(".wrapper") as HTMLElement;
        if (!w) return;

        const [x, xEnd] =
          index % 2
            ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
            : [w.scrollWidth * -1, 0];

        gsap.fromTo(
          w,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 0.5,
            },
          }
        );
      });
    },
    { scope: worksContainer }
  );

  return (
    <div
      ref={worksContainer}
      className="h-full overflow-x-hidden flex flex-col lg:gap-4 md:gap-2 gap-1"
    >
      <section>
        <div
          className={`${crimson_text.className} wrapper ${works.wrapper} text-[80px] md:text-[100px] lg:text-[150px] font-extrabold`}
        >
          WORKPORTFOLIOWORKPORTFOLIO
        </div>
      </section>
      <section className="hidden lg:block">
        <div className={`wrapper ${works.wrapper} gap-5`}>
          {portfolios1.map((portfolio, index) => (
            <Link key={index} href={portfolio.link}>
              <Image
                src={portfolio.src}
                width={imgWidth}
                height={imgWidth}
                alt="portfolio image"
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="hidden lg:block">
        <div className={`wrapper ${works.wrapper} gap-5`}>
          {portfolios2.map((portfolio, index) => (
            <Link key={index} href={portfolio.link}>
              <Image
                src={portfolio.src}
                width={imgWidth}
                height={imgWidth}
                alt="portfolio image"
              />
            </Link>
          ))}
        </div>
      </section>
      <div className="lg:hidden block">
        <div className={`wrapper ${works.wrapper} md:gap-2 gap-1`}>
          {portfolios3.map((portfolio, index) => (
            <Link key={index} href={portfolio.link}>
              <Image
                src={portfolio.src}
                width={imgWidth}
                height={imgWidth}
                alt="portfolio image"
              />
            </Link>
          ))}
        </div>
      </div>
      <section>
        <div
          className={`${crimson_text.className} wrapper ${works.wrapper} text-[80px] md:text-[100px] lg:text-[150px] font-extrabold`}
        >
          WORKPORTFOLIOWORKPORTFOLIO
        </div>
      </section>
      <div className="mt-10 container m-auto flex justify-end">
        <AnimationButton title="See all projects" path="/portfolio" />
      </div>
    </div>
  );
};
