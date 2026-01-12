import {
  FiLink,
  FiCode,
  FiArrowRight,
  FiGrid,
  FiShoppingBag,
} from "react-icons/fi";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Vortex Enterprise SaaS",
      description:
        "A multi-tenant SaaS platform featuring real-time analytics, automated billing with Stripe, and advanced user permission systems.",
      tags: ["Next.js", "PostgreSQL"],
      gradient: "from-[#2c9b8c]/20 to-[#E9C46A]/20",
      icon: <FiGrid className="text-6xl text-white/20" />,
    },
    {
      title: "Aura Marketplace",
      description:
        "High-performance e-commerce engine with Redis caching, full-text search, and a custom-built headless CMS for content management.",
      tags: ["Express", "Redis"],
      gradient: "from-indigo-500/20 to-purple-500/20",
      icon: <FiShoppingBag className="text-6xl text-white/20" />,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-32" id="projects">
      <div className="flex items-center justify-between mb-16 px-4">
        <h2 className="text-4xl font-bold">Selected Projects</h2>
        <a
          className="text-[#2c9b8c] font-bold flex items-center gap-2 hover:underline"
          href="#"
        >
          View Archive <FiArrowRight className="text-sm" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="relative overflow-hidden rounded-2xl bg-[#2B2B2B] aspect-video mb-6 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-8">
                <div className="flex gap-4">
                  <button className="bg-[#2c9b8c] text-white p-3 rounded-lg flex items-center justify-center">
                    <FiLink />
                  </button>
                  <button className="bg-white/20 backdrop-blur-md text-white p-3 rounded-lg flex items-center justify-center">
                    <FiCode />
                  </button>
                </div>
              </div>
              <div
                className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-700`}
              >
                {project.icon}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase border ${
                    tagIndex === 0
                      ? "bg-[#E9C46A]/10 text-[#E9C46A] border-[#E9C46A]/20"
                      : "bg-[#2c9b8c]/10 text-[#2c9b8c] border-[#2c9b8c]/20"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-2 group-hover:text-[#2c9b8c] transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
