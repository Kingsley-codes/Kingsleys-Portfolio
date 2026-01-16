"use client";

import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";

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
