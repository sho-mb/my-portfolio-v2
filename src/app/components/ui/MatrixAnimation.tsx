"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

export const MatrixAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.to(".canvas", {
      opacity: 0,
      duration: 4,
      scrollTrigger: {
        trigger: ".canvas",
        start: "start start",
        // end: "",
        scrub: true,
      },
    });
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext("2d");

    // Setting the width and height of the canvas
    canvas!.width = window.innerWidth;
    canvas!.height = window.innerHeight;

    // Setting up the letters
    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    const sepalate = letters.split("");

    // Setting up the columns
    const fontSize = 10;
    const columns = canvas!.width / fontSize;

    type Drops = number[];

    // Setting up the drops
    const drops: Drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
      ctx!.fillStyle = "rgba(0, 0, 0, .1)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      for (let i = 0; i < drops.length; i++) {
        const text = sepalate[Math.floor(Math.random() * sepalate.length)];
        ctx!.fillStyle = "#0f0";
        ctx!.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas!.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    // Loop the animation
    const interval = setInterval(draw, 33);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="absolute canvas"></canvas>;
};
