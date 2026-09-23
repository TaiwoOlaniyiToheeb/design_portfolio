import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AboutPreview />
      <ServicesPreview />
      <CTA />
    </>
  );
}
