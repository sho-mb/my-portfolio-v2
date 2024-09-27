import Image from "next/image";
import React from "react";
import profile from "@/assets/img/me.jpg";
import { BollAnimation } from "../ui/BollAnimation";

export const ProfileDetail = () => {
  return (
    <div className="grid grid-cols-7 gap-5">
      <div className={`col-span-3 text-xl font-semibold `}>
        I’m Frontend Developer and web designer specialize in web development
        and creation field. I love to create things.
        <br /> I had experience of backend a little So I can make backend in
        JAVA. <br />
        However I love to use frontend frame work Nuxt or Next which is able to
        write backend code with one process.
      </div>
      <Image
        src={profile}
        alt="my profile picture"
        width={600}
        className="rounded-2xl col-span-3 col-end-8"
      />
      <div className="col-span-4">
        <BollAnimation />
      </div>
      <div
        className={`text-right col-span-3 col-end-8 text-xl font-semibold mt-20 `}
      >
        I was born in Japan and moved to Cambodia Currently based in Cambodia,
        However I will move another country soon this year I think. Prefer to
        work on on line anywhere in the world. Anytime open for freelance work!
      </div>
    </div>
  );
};
