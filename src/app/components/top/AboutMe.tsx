import React from "react";
import { MyProfilePicture } from "../ui/MyProfilePicture";
import { AboutMeText } from "../ui/AboutMeText";
import { SnsIcons } from "../ui/SnsIcons";

export const AboutMe = () => {
  return (
    <section className="bg-gray-300 w-full h-full">
      <div className="container m-auto flex flex-row gap-20 justify-center items-center">
        <div className="">
          <MyProfilePicture />
        </div>
        <div className="flex flex-col gap-4">
          <AboutMeText />
          <SnsIcons />
        </div>
      </div>
    </section>
  );
};
