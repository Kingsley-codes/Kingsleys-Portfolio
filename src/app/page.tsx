"use client";

import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TechStack />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
