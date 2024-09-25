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
import Link from "next/link";
import { AnimationButton } from "../ui/AnimationButton";

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
  ];

  const [imgWidth, setImgWidth] = useState(0);

  useEffect(() => {
    const handleSize = () => {
      const width = window.innerWidth;
      setImgWidth(width / 3);
    };
    handleSize();
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
      className="h-[2000px] overflow-x-hidden flex flex-col gap-4"
    >
      <section>
        <div className={`wrapper ${works.wrapper} ${works.text}`}>
          WORKPORTFOLIOWORKPORTFOLIO
        </div>
      </section>
      <section>
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
      <section>
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
      <section>
        <div className={`wrapper ${works.wrapper} ${works.text}`}>
          WORKPORTFOLIOWORKPORTFOLIO
        </div>
      </section>
      <div className="mt-10 container m-auto flex justify-end">
        <AnimationButton title="See all projects" path="/portfolio" />
      </div>
    </div>
  );
};
