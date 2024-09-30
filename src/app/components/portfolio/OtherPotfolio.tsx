import React from "react";
import portfolio1 from "@/assets/img/portfolio1.png";
import portfolio2 from "@/assets/img/portfolio2.png";
import portfolio3 from "@/assets/img/portfolio3.png";
import portfolio4 from "@/assets/img/portfolio4.jpg";
import portfolio5 from "@/assets/img/portfoli5.png";
import portfolio6 from "@/assets/img/portfolio6.png";
import portfolio7 from "@/assets/img/portfolio7.png";
import Image from "next/image";
import Link from "next/link";

export const OtherPotfolio = () => {
  const images = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
    portfolio7,
  ];
  return (
    <section className="relative">
      <div className="bg-gray-200 absolute w-[100vw] h-full translate-x-[-50%] -z-10 left-1/2"></div>
      <div className="text-2xl font-bold text-center py-8">
        Check other projects
      </div>
      <div className="grid grid-cols-5 gap-4 w-2/3 m-auto">
        {images.map((image, index) => (
          <Link key={index} href={`/portfolio/${index + 1}`}>
            <Image src={image} alt="portfolio" />
          </Link>
        ))}
      </div>
      <div className="pb-5">
        <Link href="/portfolio">
          <div className="text-white border border-solid text-xl font-semibold px-6 w-fit py-3 m-auto mt-8 rounded-full bg-red-500">
            All projects
          </div>
        </Link>
      </div>
    </section>
  );
};
