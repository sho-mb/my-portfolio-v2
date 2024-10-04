import React from "react";
import Image from "next/image";
import Link from "next/link";
import portfolio1 from "@/assets/img/portfolio1.png";
import portfolio2 from "@/assets/img/portfolio2.png";
import portfolio3 from "@/assets/img/portfolio3.png";
import portfolio4 from "@/assets/img/portfolio4.jpg";
import portfolio5 from "@/assets/img/portfoli5.png";
import portfolio6 from "@/assets/img/portfolio6.png";
import portfolio7 from "@/assets/img/portfolio7.png";
import { PortfolioData } from "@/app/portfolio/[id]/page";

export const PortfolioDetails = ({
  id,
  portfolio,
}: {
  id: string;
  portfolio: PortfolioData;
}) => {
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
    <div>
      <div className="flex lg:flex-row flex-col lg:gap-16 gap-4">
        <div className="lg:w-[50%]">
          <Image src={images[Number(id) - 1]} alt="portfolio" />
        </div>
        <div className="flex flex-col gap-8 lg:w-[40%]">
          <div className="flex flex-col gap-4">
            <div className="px-3 py-1 bg-red-500 w-fit h-fit rounded-full text-sm">
              <p className="font-bold  text-white stroke-black stroke-1">
                {portfolio?.tag}
              </p>
            </div>
            <h1 className="text-4xl font-bold">{portfolio?.title}</h1>
          </div>
          {portfolio?.details.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="">{item.content}</p>
              {item.title === "Link" && (
                <Link
                  href={item.content}
                  target="_blank"
                  className="text-red-500"
                >
                  Visit website
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
