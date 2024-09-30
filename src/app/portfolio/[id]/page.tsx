"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { PortfolioDetails } from "@/app/components/portfolio/PostfolioDetails";
import { OtherPotfolio } from "@/app/components/portfolio/OtherPotfolio";

interface PortfolioItem {
  title: string;
  content: string;
}

export interface PortfolioData {
  tag: string;
  title: string;
  details: PortfolioItem[];
}

export default function PortfolioPage({ params }: { params: { id: string } }) {
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const { id } = params;

  useEffect(() => {
    const handleGetPortfolio = () => {
      const data = portfolioData();
      if (data) {
        setPortfolio(data);
      } else {
        notFound();
      }
    };
    handleGetPortfolio();
  }, [id]);

  const portfolioData = (): PortfolioData | null => {
    switch (id) {
      case "1":
        return {
          tag: "Freelance work",
          title: "New tech order web",
          details: [
            {
              title: "Overview",
              content:
                "Develop and design a website for influencer marketing company",
            },
            {
              title: "Responsibilities",
              content: "Frontend development, Design, SEO",
            },
            {
              title: "Technologies",
              content: "Nuxt, Tailwind CSS, Netlify, figma",
            },
            { title: "Link", content: "https://new-tech-order.netlify.app/" },
          ],
        };
      case "2":
        return {
          tag: "Company work",
          title: "Mango byte corporate website",
          details: [
            {
              title: "Overview",
              content:
                "Redesign and develop a corporate website for a IT company",
            },
            {
              title: "Responsibilities",
              content: "Frontend development, Design",
            },
            {
              title: "Technologies",
              content: "Nuxt, Tailwind CSS, Figma, Vue2, NestJs",
            },
            { title: "Link", content: "https://www.mango-byte.com/ja/" },
          ],
        };
      case "3":
        return {
          tag: "Freelance work",
          title: "Portfolio website",
          details: [
            {
              title: "Overview",
              content: "Create my portfolio website",
            },
            {
              title: "Responsibilities",
              content: "Frontend development, Design, backend development",
            },
            {
              title: "Technologies",
              content: "Tailwind CSS, Figma, NextJs, Prisma, PostgreSQL",
            },
            {
              title: "Link",
              content: "https://my-portfolio-v1-sho-mbs-projects.vercel.app/",
            },
          ],
        };
      case "4":
        return {
          tag: "Freelance work",
          title: "Vontage name card",
          details: [
            {
              title: "Overview",
              content:
                "Design name card for vintage cloth shop and develop character ",
            },
            {
              title: "Responsibilities",
              content: "Design logo type, character, name card",
            },
            {
              title: "Technologies",
              content: "Canva, Procriate",
            },
          ],
        };
      case "5":
        return {
          tag: "Portfolio",
          title: "Restaurant Cheers name card",
          details: [
            {
              title: "Overview",
              content: "Redesign my name card for portfolio",
            },
            {
              title: "Responsibilities",
              content: "Design name card",
            },
            {
              title: "Technologies",
              content: "Photoshop",
            },
          ],
        };
      case "6":
        return {
          tag: "Portfolio",
          title: "Demosite Picasso website design",
          details: [
            {
              title: "Overview",
              content: "Create a demo web design for portfolio",
            },
            {
              title: "Responsibilities",
              content: "Web design",
            },
            {
              title: "Technologies",
              content: "Figma",
            },
            {
              title: "Link",
              content:
                "https://drive.google.com/drive/folders/1nN027VNLy0pjvEA6seMraQd__9Wo1nl3?usp=sharing",
            },
          ],
        };
      case "7":
        return {
          tag: "Portfolio",
          title: "Quote of the day",
          details: [
            {
              title: "Overview",
              content: "Create a easy application",
            },
            {
              title: "Responsibilities",
              content: "Frontend development",
            },
            {
              title: "Technologies",
              content: "NextJs, vercel",
            },
            {
              title: "Link",
              content: "https://quote-of-the-day-alpha.vercel.app/",
            },
          ],
        };
      default:
        return null;
    }
  };

  return (
    <section className="container m-auto">
      <div className="py-8">
        <PortfolioDetails id={id} portfolio={portfolio!} />
      </div>
      <OtherPotfolio />
    </section>
  );
}
