import { Hero } from "./components/top/Hero";
import { AboutMe } from "./components/top/AboutMe";
import { DividerSection } from "./components/ui/Divider";
import { Works } from "./components/top/Works";

export default function Home() {
  return (
    <main className="h-full">
      <Hero />
      <AboutMe />
      <DividerSection />
      <Works />
    </main>
  );
}
