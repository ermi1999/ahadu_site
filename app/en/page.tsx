import { Button, Highlight } from "@/components/customButton";
import { ChevronRight } from "lucide-react";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import {
  HeroButton,
  HeroPrimaryButton,
  HeroSecondaryButton,
} from "@/components/heroButtons";
import Terminal from "@/components/terminal";

export default function EnglishPage() {
  return (
    <main>
      <Hero>
        <HeroTitle>Write with your own language.</HeroTitle>
        <HeroSubtitle>
          Ahadu is built for you to write with your own language.
        </HeroSubtitle>
        <HeroSubtitle>For ethiopians by ethiopian.</HeroSubtitle>
        <HeroButton>
          <HeroSecondaryButton className="text-primary">
            Check out v0.1 on github <Highlight>→</Highlight>
          </HeroSecondaryButton>
          <HeroPrimaryButton className="font-semibold">
            Docs <ChevronRight size={16} />
          </HeroPrimaryButton>
        </HeroButton>
      </Hero>
      <Terminal />
    </main>
  );
}
