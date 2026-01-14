import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

export default function ProjectCard({
  project,
  isFeatured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`group relative overflow-hidden flex flex-col rounded-xl border border-[#2b3634] bg-card-dark hover:border-primary/50 transition-all duration-300 ${
        isFeatured ? "lg:col-span-2" : ""
      }`}
    >
      <div
        className="aspect-video w-full bg-center bg-cover relative"
        style={{ backgroundImage: `url("${project.imageUrl}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent opacity-60"></div>
        {project.featured && (
          <div className="absolute top-4 right-4 flex gap-2">
            <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
              Featured
            </span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded border border-[#404f4d] text-[10px] font-medium text-[#a2b4b2]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3
            className={`font-bold text-white mb-2 group-hover:text-primary transition-colors ${
              isFeatured ? "text-2xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="text-[#a2b4b2] text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {project.links.deployment && (
            <a
              className="flex items-center gap-2 text-primary font-bold text-sm group-hover:underline"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">link</span>
              VIEW_DEPLOYMENT
            </a>
          )}
          {project.links.source && (
            <a
              className="flex items-center gap-2 text-[#a2b4b2] font-bold text-sm hover:text-white"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">code</span>
              SOURCE_CODE
            </a>
          )}
          {project.links.explore && (
            <a
              className="w-fit flex items-center gap-2 text-primary font-bold text-sm"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">
                arrow_outward
              </span>
              EXPLORE_UI
            </a>
          )}
          {project.links.documentation && (
            <a
              className="w-fit flex items-center gap-2 text-primary font-bold text-sm"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">
                terminal
              </span>
              DOCUMENTATION
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
