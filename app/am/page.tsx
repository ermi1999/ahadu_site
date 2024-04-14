"use client";
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

export default function AmharicPage() {
  localStorage.setItem("lang", "am");
  return (
    <main className="bg-page-gradient top-0">
      <Navbar lang="am" page="home" />

      <section className="flex items-center flex-col overflow-hidden pt-20">
        <Hero>
          <HeroSecondaryButton className="font-semibold" lang="am">
            Github ላይ ይመልከቱ <Highlight>→</Highlight>
          </HeroSecondaryButton>
          <HeroTitle className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
            በራሳችን ቋንቋ እንጻፍ።
          </HeroTitle>
          <HeroSubtitle className="font-semibold">
            ልዩ ነገሮችን በልዩ ቋንቋችን እንፍጠር።
          </HeroSubtitle>
          <HeroSubtitle className="font-semibold">ለ ኢትዮጲያውያን!</HeroSubtitle>
          <HeroButton>
            <HeroPrimaryButton className="font-semibold" lang="am">
              አሁኑኑ ይጀምሩ <ChevronRight size={16} />
            </HeroPrimaryButton>
          </HeroButton>
        </Hero>
        <HeroImage />
      </section>
    </main>
  );
}
