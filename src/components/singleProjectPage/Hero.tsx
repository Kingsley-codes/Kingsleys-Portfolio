import type { Project } from "@/data/projects";

type HeroProps = {
  project: Project;
};

export default function Hero({ project }: HeroProps) {
  return (
    <section className="relative w-full h-[70vh] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          alt={project.title}
          className="w-full h-full object-cover grayscale opacity-40"
          src={project.heroImage}
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          {project.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
          {project.subtitle}
        </p>
      </div>
    </section>
  );
}
