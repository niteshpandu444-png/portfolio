import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Exploring } from "@/components/sections/exploring";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <Exploring />
        <Work />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
