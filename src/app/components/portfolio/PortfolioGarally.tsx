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

export const PortfolioGarally = () => {
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
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <Link key={index} href={`/portfolio/${index + 1}`}>
          <Image src={image} alt="portfolio" />
        </Link>
      ))}
    </div>
  );
};
