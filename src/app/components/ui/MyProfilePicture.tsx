import Image from "next/image";
import React from "react";
import myImage from "@/assets/img/Me.jpg";
import RoundText from "@/assets/img/roundedText.png";

export const MyProfilePicture = () => {
  return (
    <div className="relative p-10">
      <Image
        src={myImage}
        width={280}
        height={280}
        alt="me"
        className="rounded-full"
      />
      <Image
        src={RoundText}
        width={580}
        height={5820}
        alt="rounded text"
        className="rounded-full absolute top-0 left-0 animate-spin-slow"
      />
    </div>
  );
};
