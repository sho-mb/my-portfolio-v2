"use client";

import React from "react";
import { Hero } from "../components/portfolio/hero";
import { PortfolioGarally } from "../components/portfolio/PortfolioGarally";
import { Contact } from "../components/common/Contact";
import { Divider } from "@nextui-org/react";

export default function page() {
  return (
    <section className="container m-auto">
      <Hero />
      <PortfolioGarally />
      <div className="mt-4">
        <Divider />
      </div>
      <Contact />
    </section>
  );
}
