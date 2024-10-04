import Image from "next/image";
import React from "react";
import profile from "@/assets/img/me.jpg";
import { BollAnimation } from "../ui/BollAnimation";

export const ProfileDetail = () => {
  return (
    <div className="md:grid md:grid-cols-7 flex flex-col gap-5">
      <div className={`md:col-span-3 md:text-xl text-md font-semibold `}>
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
        className="rounded-2xl md:col-span-3 md:col-end-8"
      />
      <div className="col-span-4 md:block hidden">
        <BollAnimation />
      </div>
      <div
        className={`text-right col-span-3 col-end-8 md:text-xl text-md font-semibold md:mt-20 mt-8`}
      >
        I was born in Japan and moved to Cambodia Currently based in Cambodia,
        However I will move another country soon this year I think. Prefer to
        work on on line anywhere in the world. Anytime open for freelance work!
      </div>
    </div>
  );
};
