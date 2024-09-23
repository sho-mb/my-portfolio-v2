import type { Metadata } from "next";
import "./globals.css";
import { roboto_Flex } from "./font";
import { Header } from "./components/common/Header";
import { NextUIProvider } from "@nextui-org/react";
import SmoothScrolling from "./components/common/SmoothScrolling";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_Flex.className}`}>
        <div className="container m-auto">
          <Header />
        </div>
        <NextUIProvider>
          <SmoothScrolling>{children}</SmoothScrolling>
        </NextUIProvider>
      </body>
    </html>
  );
}
