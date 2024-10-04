import React from "react";
import { MdiGithub } from "../icons/githubIcon";
import { MdiTwitter } from "../icons/TwitterIcon";
import { MdiLinkedin } from "../icons/LinkedInIcon";
import { MdiFacebook } from "../icons/FacebookIcon";
import { MdiNote } from "../icons/NoteIcon";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export const SnsIcons = () => {
  // const container = useRef(null);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.from(".icon", {
      xPercent: -40,
      opacity: 0,
      duration: 4,
      ease: "power2.inOut",
      stagger: {
        each: 0.8,
      },
      scrollTrigger: {
        trigger: "#aboutMe",
        start: "top center",
        end: "+=200",
        scrub: true,
      },
    });
  });

  return (
    <div className="text-black flex gap-4">
      <div className="icon">
        <Link href="https://x.com/kisho_art_" target="_blank">
          <MdiTwitter width="40px" height="40px" />
        </Link>
      </div>
      <div className="icon">
        <Link href="www.linkedin.com/in/sho-developer" target="_blank">
          <MdiLinkedin width="40px" height="40px" />
        </Link>
      </div>
      <div className="icon">
        <Link href="https://www.facebook.com/kisho.tamura.5" target="_blank">
          <MdiFacebook width="40px" height="40px" />
        </Link>
      </div>
      <div className="icon">
        <Link href="https://github.com/xoxkishoxox" target="_blank">
          <MdiGithub width="40px" height="40px" />
        </Link>
      </div>
      <div className="icon">
        <Link href="https://note.com/cambo/" target="_blank">
          <MdiNote width="40px" height="40px" />
        </Link>
      </div>
    </div>
  );
};
