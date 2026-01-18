"use client";

import HeroSection from "@/components/homepage/HeroSection";
import TechStack from "@/components/homepage/TechStack";
import ProjectsSection from "@/components/homepage/ProjectsSection";
import ContactSection from "@/components/homepage/ContactSection";
import AboutSection from "@/components/homepage/AboutSection";
import StatsSection from "@/components/homepage/StatsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <TechStack />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
