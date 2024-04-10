import { Highlight } from "@/components/customButton";
import { ChevronRight } from "lucide-react";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import {
  HeroButton,
  HeroPrimaryButton,
  HeroSecondaryButton,
} from "@/components/heroButtons";
import { HeroImage } from "@/components/heroImage";
import { Navbar } from "@/components/navbar";

export default function EnglishPage() {
  return (
    <main className="bg-page-gradient top-0">
      <Navbar lang="en" page="home" />

      <section className="flex items-center flex-col overflow-hidden pt-20">
        <Hero>
          <HeroSecondaryButton className="mb-5" lang="en">
            Check out v0.1 on github <Highlight>→</Highlight>
          </HeroSecondaryButton>
          <HeroTitle className="text-[1.2rem]">
            Write with your own language.
          </HeroTitle>
          <HeroSubtitle>
            Ahadu is built for you to write with your own language.
          </HeroSubtitle>
          <HeroSubtitle>For ethiopians by ethiopian.</HeroSubtitle>
          <HeroButton>
            <HeroPrimaryButton lang="en">
              Get Started <ChevronRight size={16} />
            </HeroPrimaryButton>
          </HeroButton>
        </Hero>
        <HeroImage />
      </section>
    </main>
  );
}
