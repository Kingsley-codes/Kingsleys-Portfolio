interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2023 - Present",
    title: "Senior Full-Stack Engineer",
    description:
      "Specializing in Next.js 14 and Enterprise Node.js architectures.",
  },
  {
    year: "2021 - 2023",
    title: "Frontend Specialist",
    description:
      "Led the development of complex React dashboards and design systems.",
  },
  {
    year: "2019 - 2021",
    title: "University Graduate",
    description:
      "Completed Computer Science degree with a focus on Software Engineering.",
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
              <h3 className="font-bold text-lg md:text-lg text-gray-300 mb-1 md:mb-2">
                {milestone.title}
              </h3>
              <p className="text-sm md:text-sm text-slate-400 leading-relaxed">
                {milestone.description}
              </p>
            </div>

            {/* Year - Mobile alternative position (right side) */}
            <div className="hidden">
              <div
                className={`md:hidden mt-2 ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}
              >
                <span className="text-primary font-bold text-sm">
                  {milestone.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
