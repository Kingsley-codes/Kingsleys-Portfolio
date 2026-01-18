import type { Project } from "@/data/projects";
import Image from "next/image";

type HeroProps = {
  project: Project;
};

export default function Hero({ project }: HeroProps) {
  return (
    <section className="relative w-full h-[105vh] flex items-end overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          alt={project.title}
          fill
          className="object-cover"
          src={project.heroImage}
          sizes="100vw"
        />
        {/* Stronger right-to-left gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-black/70 to-black/95"
          style={{
            background:
              "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.98) 100%)",
          }}
        />
        {/* Additional dark overlay on left side */}
        <div className="absolute left-0 inset-y-0 w-2/5 bg-gradient-to-r from-black/90 to-transparent" />
      </div>

      {/* Content - positioned on left side */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20">
        <div className="flex justify-start">
          <div className="w-full md:w-1/2 lg:w-2/5">
            {/* Tech Stack */}
            <div className="flex flex-wrap ml-1 lg:ml-16 gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Title with text shadow */}
            <h1 className="text-3xl ml-1 lg:ml-16 md:text-4xl lg:text-5xl text-white font-bold mb-6 tracking-tighter drop-shadow-lg">
              {project.title}
            </h1>

            {/* Subtitle */}
            <p className="text-md ml-1 lg:ml-16 md:text-lg text-gray-300 font-light leading-relaxed drop-shadow-md">
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
