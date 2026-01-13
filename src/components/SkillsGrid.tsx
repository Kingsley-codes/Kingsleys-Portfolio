interface SkillTag {
  name: string;
}

interface SkillCard {
  title: string;
  description: string;
  icon: string;
  tags?: SkillTag[];
  isPrimary?: boolean;
  colSpan?: number;
  rowSpan?: number;
}

const coreTechTags: SkillTag[] = [
  { name: "Next.js" },
  { name: "React 18" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "PostgreSQL" },
  { name: "Prisma" },
];

const skillCards: SkillCard[] = [
  {
    title: "Core Tech Stack",
    description:
      "Specializing in the modern React ecosystem for performance and developer experience.",
    icon: "layers",
    tags: coreTechTags,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    title: "Backend & Infrastructure",
    description: "Node.js, Express, Docker, AWS S3",
    icon: "database",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Team Lead",
    description: "Experienced in Agile, mentoring, and code reviews.",
    icon: "groups",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Currently in",
    description: "Lagos, Nigeria",
    icon: "public",
    isPrimary: true,
    colSpan: 1,
    rowSpan: 1,
  },
];

export default function SkillsGrid() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary">
          grid_view
        </span>
        Core Competencies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[500px]">
        {skillCards.map((card, index) => (
          <div
            key={index}
            className={`
              ${card.colSpan ? `md:col-span-${card.colSpan}` : ""}
              ${card.rowSpan ? `md:row-span-${card.rowSpan}` : ""}
              ${card.isPrimary ? "bg-primary text-white" : "bg-card-dark"}
              p-6 rounded-xl border border-white/5 flex flex-col justify-between glow-hover
              ${
                index === 0
                  ? "bg-gradient-to-br from-card-dark to-primary/10"
                  : ""
              }
            `}
          >
            <div>
              <span
                className={`material-symbols-outlined mb-4 ${
                  card.isPrimary ? "" : "text-primary"
                }`}
              >
                {card.icon}
              </span>
              <h3
                className={`text-2xl font-bold mb-2 ${
                  card.isPrimary ? "text-white" : ""
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`mb-6 ${
                  card.isPrimary ? "text-white/80" : "text-slate-400"
                }`}
              >
                {card.description}
              </p>
            </div>

            {card.tags && (
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/10"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            )}

            {card.isPrimary && (
              <div>
                <p className="text-xs opacity-80 uppercase tracking-widest font-bold">
                  Currently in
                </p>
                <p className="text-lg font-bold">{card.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
