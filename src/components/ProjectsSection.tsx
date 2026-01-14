import { FiLink, FiArrowRight } from "react-icons/fi";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Meride Haven",
      description:
        "A premium transport and hospitality brand delivering private and corporate transportation, professional chauffeur services, secure escort support, and guest coordination with a focus on safety, comfort, and trust.",
      tags: ["Next.js", "Express.js", "MongoDB", "Ercas API"],
      imageUrl:
        "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768329379/itplrm6l3v9gmmrgyddg.png",
      url: "https://meride-haven.com/",
    },

    {
      title: "iDonatio",
      description:
        "A cashless donation platform that seamlessly connects donors and donees, enabling fast, secure giving and powerful donation management through an easy-to-use web and mobile experience.",
      tags: ["Express", "Next.js", "MongoDB", "Paystack API"],
      imageUrl:
        "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768329373/bmvzikmsfnurm2d92p20.png",
      url: "https://www.idonatio.com/",
    },
    {
      title: "Forever E-commerce",
      description:
        "High-performance e-commerce engine with Redis caching, full-text search, and a custom-built headless CMS for content management.",
      tags: ["Express", "React", "MongoDB", "Paystack API"],
      imageUrl:
        "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768329372/x0iwhuhqolqwvw8296xw.png",
      url: "https://forever-ecommerce-ns8g.onrender.com/",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-32" id="projects">
      <div className="flex items-center justify-between mb-16 px-4">
        <h2 className="text-4xl font-bold">Selected Projects</h2>
        <a
          className="text-[#2c9b8c] font-bold flex items-center gap-2 hover:underline"
          href="/projects"
        >
          View All Projects <FiArrowRight className="text-sm" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="relative overflow-hidden rounded-2xl bg-[#2B2B2B] aspect-video mb-6 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-8">
                <div className="flex gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#2c9b8c] text-white p-3 rounded-lg flex items-center justify-center">
                      <FiLink />
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="w-full h-full bg-cover bg-center flex items-center justify-center group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                }}
              ></div>
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

            <h3 className="text-2xl font-bold text-gray-300 mb-2 group-hover:text-[#2c9b8c] transition-colors">
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
