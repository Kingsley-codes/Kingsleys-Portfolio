import { FiExternalLink, FiCode } from "react-icons/fi";

type Meta = {
  role: string;
  duration: string;
  team: string;
};

type Links = {
  live?: string;
  source?: string;
};

type Props = {
  meta: Meta;
  links: Links;
};

export default function ProjectSidebar({ meta, links }: Props) {
  return (
    <aside className="lg:col-span-4 hidden lg:block">
      <div className="sticky top-32 space-y-8">
        {/* Project Access */}
        <div className="p-8 bg-surface-dark rounded-2xl border border-white/5 shadow-2xl">
          <h3 className="text-lg font-bold mb-6">Project Access</h3>
          <div className="space-y-4">
            {links.live && (
              <a
                className="w-full flex items-center justify-between group bg-primary hover:bg-primary/90 text-white p-4 rounded-xl transition-all"
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-bold">View Live Project</span>
                <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
              </a>
            )}

            {links.source && (
              <a
                className="w-full flex items-center justify-between group bg-white/5 hover:bg-white/10 text-white p-4 rounded-xl border border-white/10 transition-all"
                href={links.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-bold">GitHub Repository</span>
                <FiCode className="group-hover:rotate-12 transition-transform" />
              </a>
            )}
          </div>
        </div>

        {/* Project Metadata */}
        <div className="p-8 bg-surface-dark/30 rounded-2xl border border-white/5">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
            Role
          </h4>
          <p className="text-white mb-6">{meta.role}</p>

          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
            Duration
          </h4>
          <p className="text-white mb-6">{meta.duration}</p>

          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
            Team
          </h4>
          <p className="text-white">{meta.team}</p>
        </div>
      </div>
    </aside>
  );
}
