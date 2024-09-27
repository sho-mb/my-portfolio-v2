import React from "react";
import { Hero } from "../components/about/Hero";
import { ProfileDetail } from "../components/about/ProfileDetail";
import { DividerSection } from "../components/ui/Divider";
import { Solution } from "../components/about/Solution";
import { Contact } from "../components/common/Contact";

export default function about() {
  return (
    <div>
      <Hero />
      <div className="container m-auto">
        <ProfileDetail />
        <DividerSection />
        <Solution />
        <Contact />
      </div>
    </div>
  );
}
