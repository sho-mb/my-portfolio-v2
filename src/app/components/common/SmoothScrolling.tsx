"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 1,
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
