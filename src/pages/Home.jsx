import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import AboutPreview from "../components/home/AboutPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTABanner from "../components/home/CTABanner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTABanner />
    </div>
  );
}