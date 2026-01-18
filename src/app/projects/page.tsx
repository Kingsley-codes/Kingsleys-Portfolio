import PageHeading from "@/components/projectsPage/PageHeading";
import FilterBar from "@/components/projectsPage/FilterBar";
import ProjectGrid from "@/components/projectsPage/ProjectGrid";
import CTASection from "@/components/projectsPage/CTASection";

export default function Home() {
  return (
    <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 lg:px-20 py-12">
      <PageHeading />
      <FilterBar />
      <ProjectGrid />
      <CTASection />
    </main>
  );
}
