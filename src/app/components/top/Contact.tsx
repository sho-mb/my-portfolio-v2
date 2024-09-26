"use client";

import { crimson_text } from "@/app/font";
import React from "react";
import { SnsIconNoAnimation } from "../ui/SnsIconNoAnimation";

export const Contact = () => {
  const email = "kisho.art.work@gmail.com";
  return (
    <div className="text-center flex flex-col gap-4 pb-20">
      <div className={`${crimson_text.className} font-bold text-[80px]`}>
        Let&apos;s create togther
      </div>
      <a href={`mailto:${email}`} className="text-4xl font-semibold">
        {email}
      </a>
      <div className="w-fit m-auto text-3xl font-semibold">
        <a href="/path/to/cv.pdf" download className="group">
          <div>Download CV</div>
          <div className="border-b-2 border-red-500 border-solid w-0 group-hover:w-full transition-all duration-200"></div>
        </a>
      </div>
      <div className="m-auto mt-4">
        <SnsIconNoAnimation />
      </div>
    </div>
  );
};
