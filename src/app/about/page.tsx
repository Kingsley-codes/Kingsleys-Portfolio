import BioSection from "@/components/aboutPage/BioSection";
import Timeline from "@/components/aboutPage/Timeline";
import SkillsGrid from "@/components/aboutPage/SkillsGrid";
import AboutProfile from "@/components/aboutPage/AboutProfile";

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
