import { Project } from "@/types";
import { FiLink } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
  onClick?: () => void;
}

export default function ProjectCard({
  project,
  isFeatured = false,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      className={`group relative overflow-hidden flex flex-col rounded-xl border border-[#2b3634] bg-card-dark hover:border-primary/50 transition-all duration-300 ${
        isFeatured ? "lg:col-span-2" : ""
      } ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <div
        className="aspect-video w-full bg-center bg-cover relative"
        style={{ backgroundImage: `url("${project.imageUrl}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent opacity-60"></div>
        {project.featured && (
          <div className="absolute top-4 right-4 flex gap-2">
            <span className="px-3 py-1 bg-primary border border-gray-300 rounded-full text-[10px] font-bold text-gray-200 uppercase tracking-wider">
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
              href={project.links.deployment}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLink /> View Deployment
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
