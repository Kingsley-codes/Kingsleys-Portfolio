import BioSection from "@/components/BioSection";
import Timeline from "@/components/Timeline";
import SkillsGrid from "@/components/SkillsGrid";
import AboutProfile from "@/components/AboutProfile";

export default function AboutPage() {
  return (
    <main className="flex-1 max-w-5xl mx-auto px-6 py-12 w-full relative">
      <AboutProfile />
      <BioSection />
      <Timeline />
      <SkillsGrid />
    </main>
  );
}
