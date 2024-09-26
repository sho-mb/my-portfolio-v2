import { Hero } from "./components/top/Hero";
import { AboutMe } from "./components/top/AboutMe";
import { DividerSection } from "./components/ui/Divider";
import { Works } from "./components/top/Works";
import { Tools } from "./components/top/Tools";
import { WorkWith } from "./components/top/WorkWith";
import { Contact } from "./components/top/Contact";

export default function Home() {
  return (
    <main className="h-full">
      <Hero />
      <AboutMe />
      <DividerSection />
      <Works />
      <DividerSection />
      <Tools />
      <WorkWith />
      <DividerSection />
      <Contact />
    </main>
  );
}
