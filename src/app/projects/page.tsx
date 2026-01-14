import PageHeading from "@/components/PageHeading";
import FilterBar from "@/components/FilterBar";
import ProjectGrid from "@/components/ProjectGrid";
import CTASection from "@/components/CTASection";

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
