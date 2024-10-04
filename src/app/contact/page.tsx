import React from "react";
import { Contact } from "../components/common/Contact";
import { WorkWith } from "../components/top/WorkWith";

export default function page() {
  return (
    <div>
      <div className="mb-6">
        <WorkWith />
      </div>
      <Contact />
    </div>
  );
}
