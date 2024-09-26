"use  client";

import Image from "next/image";
import React from "react";
import tellingBackground from "@/assets/img/tellingBg.png";
import { crimson_text } from "@/app/font";

export const WorkWithMe = () => {
  return (
    <div className="relative">
      <Image
        src={tellingBackground}
        alt="Background picture of asking work with me"
      />
      <div
        className={`uppercase text-center absolute w-full top-1/2 text-white font-bold text-[80px] left-1/2 translate-x-[-50%] translate-y-[-50%] ${crimson_text.className}`}
      >
        Let’s collaborate
        <br /> to create <br />
        unique solution
        <br /> to your project.
      </div>
    </div>
  );
};
