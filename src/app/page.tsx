import HalideLanding from "@/components/ui/halide-topo-hero";
import { Navbar } from "@/components/navbar";
import { Gallery4 } from "@/components/ui/gallery4";
import { LogoCarouselSection } from "@/components/logo-carousel-section";
import RuixenBentoCards from "@/components/ui/ruixen-bento-cards";
import { AboutSection } from "@/components/about-section";
import { TeamSection } from "@/components/team-section";
import { ApproachSection } from "@/components/approach-section";
import { Testimonials } from "@/components/testimonials";
import { WorldMapSection } from "@/components/world-map-section";
import { BentoPricingSection } from "@/components/bento-pricing-section";
import WarpShaderHero from "@/components/ui/wrap-shader";
import { Footerdemo } from "@/components/footer-demo";
import { InteractiveBentoGallerySection } from "@/components/interactive-bento-gallery-section";
import { ArticlesSection } from "@/components/articles-section";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HalideLanding />
      <Gallery4 />
      <LogoCarouselSection />
      <RuixenBentoCards />
      <AboutSection />
      <TeamSection />
      <ApproachSection />
      <Testimonials />
      <WorldMapSection />
      <WarpShaderHero />
      <BentoPricingSection />
      <InteractiveBentoGallerySection />
      <ArticlesSection />
      <Footerdemo />
    </main>
  );
}
