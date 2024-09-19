import React from "react";
import { MdiGithub } from "../icons/githubIcon";
import { MdiTwitter } from "../icons/TwitterIcon";
import { MdiLinkedin } from "../icons/LinkedInIcon";
import { MdiFacebook } from "../icons/FacebookIcon";
import { MdiNote } from "../icons/NoteIcon";
import Link from "next/link";

export const SnsIcons = () => {
  return (
    <div className="text-black flex gap-4">
      <div>
        <Link href="#">
          <MdiTwitter width="40px" height="40px" />
        </Link>
      </div>
      <div>
        <Link href="#">
          <MdiLinkedin width="40px" height="40px" />
        </Link>
      </div>
      <div>
        <Link href="#">
          <MdiFacebook width="40px" height="40px" />
        </Link>
      </div>
      <div>
        <Link href="#">
          <MdiGithub width="40px" height="40px" />
        </Link>
      </div>
      <div>
        <Link href="#">
          <MdiNote width="40px" height="40px" />
        </Link>
      </div>
    </div>
  );
};
