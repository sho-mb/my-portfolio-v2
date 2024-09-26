import Link from "next/link";
import React from "react";
import { MdiTwitter } from "../icons/TwitterIcon";
import { MdiLinkedin } from "../icons/LinkedInIcon";
import { MdiFacebook } from "../icons/FacebookIcon";
import { MdiGithub } from "../icons/githubIcon";
import { MdiNote } from "../icons/NoteIcon";

export const SnsIconNoAnimation = () => {
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
