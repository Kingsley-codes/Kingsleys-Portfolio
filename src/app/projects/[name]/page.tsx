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
import Link from "next/link";

type PageProps = {
  params: Promise<{
    name: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    name: project.name,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { name } = await params;

  const project = projects.find((p) => p.name === name);

  if (!project) {
    notFound();
  }

  const links = {
    live: project.links?.live ?? null,
    source: project.links?.source ?? null,
  };

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
            <Link className="hover:text-primary transition-colors" href="#">
              Projects
            </Link>
            <FiChevronRight className="text-xs" />
            <span className="text-slate-300">{project.title} Case Study</span>
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

      <FloatingCTA links={links} />
    </>
  );
}
