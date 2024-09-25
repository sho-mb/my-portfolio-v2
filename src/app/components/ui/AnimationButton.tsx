import React from "react";
import { IcBaselineArrowForward } from "../icons/ArrowForward";
import Link from "next/link";

export const AnimationButton = ({
  title,
  path,
}: {
  title: string;
  path: string;
}) => {
  return (
    <Link className="flex items-center gap-4 text-black group" href={path}>
      <div className="w-8 h-8 border-red-500 border-2 rounded-full flex items-center justify-center">
        <div className="group-hover:translate-x-4 transition-transform duration-200">
          <IcBaselineArrowForward width="20" height="20" />
        </div>
      </div>
      <div>
        <div className="text-xl w-fit">{title}</div>
        <div className="w-0 group-hover:w-full border-b-2 border-red-500 border-solid transition-all duration-400 opacity-0 group-hover:opacity-100"></div>
      </div>
    </Link>
  );
};
