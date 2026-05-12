interface Milestone {
  year: string;
  title: string;
  company: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "June 2025 - Present",
    title: "Backend Engineer",
    company: "Enforca",
    description:
      "Building and maintaining backend services for five products — Meride-Haven (ride-matching), Idonatio (donation management), AltBucks (micro-task platform), Taskgynie (home services), and Enforca Sandbox (Edu-tech). Core work includes booking logic, payment flows, webhook handling, and background task processing.",
  },
  {
    year: "Sept 2025 - Jan 2026",
    title: "Backend Engineer",
    company: "Emerj",
    description:
      "Contributed to an enterprise AI-powered regulatory intelligence platform (Legal Watch Dog) using Node.js and Express. Built web scraping pipelines, LLM integrations for summarizing regulatory changes, and standardized OpenAPI (Swagger) documentation across backend modules.",
  },
  {
    year: "Oct 2024 - June 2025",
    title: "Full-Stack Software Engineer",
    company: "Skilled Crow (Dev Studio)",
    description:
      "Designed and built full-stack web applications for clients including Declutah, a thrift listing marketplace. Developed frontend interfaces with Tailwind CSS and backend services with Node.js and Express, collaborating closely with designers and product stakeholders.",
  },
  {
    year: "June 2023 - Sept 2024",
    title: "Backend Engineer",
    company: "Proattire Technology",
    description:
      "Built and maintained backend services connecting customers, dressmakers, and vendors for bespoke clothing. Implemented authentication, role-based permissions, vendor onboarding, order and payment flows, webhook processing, and database query optimizations.",
  },
  {
    year: "Sept 2022 - Nov 2023",
    title: "Fullstack Developer",
    company: "CrownFM",
    description:
      "Maintained and improved CrownFM's digital platforms. Implemented authentication flows, role-based access control, backend data workflows, system integrations, and provided technical support for day-to-day operations.",
  },
  {
    year: "Jan 2022 - July 2022",
    title: "Computer Science Instructor",
    company: "ADEM Group of Schools",
    description:
      "Taught foundational computing concepts and practical digital skills. Led students through live projects, delivered hands-on lessons with real-life examples, and collaborated with school staff to align lesson plans with academic goals.",
  },
];

export default function Timeline() {
  return (
    <section className="mb-16 md:mb-32 px-4">
      <h2 className="md:text-3xl text-2xl text-gray-300 font-bold text-center mb-12 md:mb-16">
        Career Milestones
      </h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line - Desktop only */}
        <div className="hidden md:block absolute bg-primary left-1/2 -translate-x-1/2 h-full w-[2px] timeline-line" />

        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16 w-full ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Year - Desktop */}
            <div
              className={`w-[45%] hidden md:block ${
                index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
              }`}
            >
              <span className="text-primary font-bold">{milestone.year}</span>
            </div>

            {/* Dot container */}
            <div className="absolute md:relative left-4 md:left-auto top-0 md:top-auto md:z-10">
              <span className="relative flex h-3 w-3 md:h-4 md:w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-primary"></span>
              </span>
            </div>

            {/* Milestone Card */}
            <div className="md:w-[45%] ml-10 md:ml-0 bg-card-dark p-5 md:p-6 rounded-xl border border-white/5 glow-hover transition-all">
              {/* Year - Mobile */}
              <span className="text-primary font-bold md:hidden text-sm block mb-2">
                {milestone.year}
              </span>
              <h3 className="font-bold text-lg md:text-lg text-gray-300 mb-0.5">
                {milestone.title}
              </h3>
              <p className="text-primary text-sm font-medium mb-2 md:mb-3">
                {milestone.company}
              </p>
              <p className="text-sm md:text-sm text-slate-400 leading-relaxed">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
