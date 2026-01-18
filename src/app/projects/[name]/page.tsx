import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

import ChallengeSection from "@/components/singleProjectPage/ChallengeSection";
import ResultsSection from "@/components/singleProjectPage/ResultsSection";
import { FiChevronRight } from "react-icons/fi";
import { FaRocket, FaCode } from "react-icons/fa";
import FloatingCTA from "@/components/singleProjectPage/FloatingCTA";
import Hero from "@/components/singleProjectPage/Hero";
import SolutionSection from "@/components/singleProjectPage/SolutionSection";
import ProjectSidebar from "@/components/singleProjectPage/ProjectSidebar";
import TechnicalSection from "@/components/singleProjectPage/TechnicalSection";

type PageProps = {
  params: {
    name: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    name: project.name,
  }));
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.name === params.name);

  if (!project) {
    notFound();
  }

  return (
    <>
      <main className="pt-20">
        <Hero project={project} />

        {/* Mobile Project Links */}
        <div className="max-w-5xl mx-auto px-6 py-8 flex gap-4 md:hidden">
          <button className="flex-1 bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
            <FaRocket /> Live Site
          </button>
          <button className="flex-1 bg-surface-dark border border-white/10 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
            <FaCode /> Source
          </button>
        </div>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto px-6 pb-32">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 py-10 text-slate-500 text-sm">
            <a className="hover:text-primary transition-colors" href="#">
              Portfolio
            </a>
            <FiChevronRight className="text-xs" />
            <span className="text-slate-300">NexTask Case Study</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-24">
              <ChallengeSection data={project.challenge} />
              <SolutionSection data={project.solution} />
              <TechnicalSection />
              <ResultsSection data={project.results} />
            </div>

            {/* Sidebar Desktop Actions */}
            <ProjectSidebar meta={project.meta} links={project.links} />
          </div>
        </div>
      </main>

      <FloatingCTA />
    </>
  );
}
