import { MdPersonSearch } from "react-icons/md";

export default function BioSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-20 md:mb-32 items-start">
      <div className="md:col-span-4 md:sticky md:top-24">
        <h2 className="text-2xl md:text-2xl font-bold text-gray-300 mb-4 flex items-center gap-2">
          <MdPersonSearch className="text-primary text-xl" />
          My Journey
        </h2>
        <div className="h-1 w-32 md:w-42 bg-primary mb-6" />
        <p className="text-slate-400 leading-relaxed text-sm md:text-sm">
          Based in Nigeria, building for the world. My philosophy is simple —
          write clean, purposeful code that solves real human problems.
        </p>
      </div>
      <div className="md:col-span-8 space-y-5 md:space-y-6 text-slate-300">
        <p className="text-base md:text-lg leading-relaxed md:leading-normal">
          My journey into tech didn&apos;t start at a desk — it started in a
          classroom. After completing my studies, my first role was as a{" "}
          <span className="text-gradient font-semibold">
            Computer Science Instructor
          </span>{" "}
          at ADEM Group of Schools, where I taught foundational computing and
          led students through live projects. Teaching forced me to understand
          things deeply, and that discipline became the foundation of everything
          I&apos;ve built since.
        </p>
        <p className="text-base md:text-lg leading-relaxed md:leading-normal">
          From there, I transitioned into industry as a{" "}
          <span className="text-gradient font-semibold">
            Fullstack Developer
          </span>{" "}
          at CrownFM, where I got my hands dirty with authentication systems,
          role-based access control, and the kind of backend plumbing that keeps
          real products running. That experience sharpened my instinct for
          reliability and clean architecture.
        </p>
        <p className="text-base md:text-lg leading-relaxed md:leading-normal">
          Over the next few years, I grew into a focused{" "}
          <span className="text-gradient font-semibold">Backend Engineer</span>{" "}
          — building payment flows and vendor systems at Proattire, shipping
          client products at Skilled Crow, and contributing to an{" "}
          <span className="text-gradient font-semibold">
            AI-powered regulatory intelligence platform
          </span>{" "}
          at Emerj, where I integrated LLMs and built scraping pipelines for
          real-time policy monitoring.
        </p>
        <p className="text-base md:text-lg leading-relaxed md:leading-normal">
          Today at <span className="text-gradient font-semibold">Enforca</span>,
          I architect and maintain backend services across five distinct
          products — from ride-matching and donation platforms to micro-task
          systems and an Edu-tech mentorship platform. Four years in, the
          curiosity that started in a classroom is still what drives me forward.
        </p>
      </div>
    </div>
  );
}
