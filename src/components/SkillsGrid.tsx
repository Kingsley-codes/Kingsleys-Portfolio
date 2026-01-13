import { BsFillGridFill } from "react-icons/bs";
import { IoLayers } from "react-icons/io5";
import { ReactNode } from "react";
import { FaDatabase, FaUsers, FaGlobeAfrica } from "react-icons/fa";

interface SkillTag {
  name: string;
}

interface SkillCard {
  title: string;
  description: string;
  icon: ReactNode;
  tags?: SkillTag[];
  isPrimary?: boolean;
}

const coreTechTags: SkillTag[] = [
  { name: "Next.js" },
  { name: "React 18" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "MongoDB" },
  { name: "Express.js" },
  { name: "Node.js" },
];

const skillCards: SkillCard[] = [
  {
    title: "Core Tech Stack",
    description:
      "Specializing in the modern React ecosystem for performance and developer experience.",
    icon: <IoLayers className="w-6 h-6" />,
    tags: coreTechTags,
  },
  {
    title: "Backend & Infrastructure",
    description: "Node.js, Express, Docker, AWS S3",
    icon: <FaDatabase />,
  },
  {
    title: "Team Lead",
    description: "Experienced in Agile, mentoring, and code reviews.",
    icon: <FaUsers />,
  },
  {
    title: "Currently in",
    description: "Lagos, Nigeria",
    icon: <FaGlobeAfrica />,
    isPrimary: true,
  },
];

export default function SkillsGrid() {
  return (
    <section className="mb-24">
      {/* SECTION TITLE */}
      <h2 className="text-3xl text-gray-300 font-bold mb-12 flex items-center gap-3">
        <BsFillGridFill className="text-primary" />
        Core Competencies
      </h2>

      {/* OUTER FLEX CONTAINER */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* LEFT — BIG CARD */}
        <SkillCardUI
          card={skillCards[0]}
          className="md:w-1/2 bg-gradient-to-br from-card-dark to-primary/10"
        />

        {/* RIGHT — STACKED */}
        <div className="flex flex-col gap-4 md:w-1/2">
          {/* TOP RIGHT */}
          <SkillCardUI card={skillCards[1]} />

          {/* BOTTOM RIGHT — FLEX ROW */}
          <div className="flex flex-col sm:flex-row gap-4">
            <SkillCardUI card={skillCards[2]} className="flex-1" />
            <SkillCardUI card={skillCards[3]} isPrimary className="flex-1" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                CARD UI                                     */
/* -------------------------------------------------------------------------- */

function SkillCardUI({
  card,
  className = "",
  isPrimary = false,
}: {
  card: SkillCard;
  className?: string;
  isPrimary?: boolean;
}) {
  return (
    <div
      className={`
        ${isPrimary ? "bg-primary text-white" : "bg-card-dark"}
        p-6 rounded-xl border border-white/5
        flex flex-col justify-between
        glow-hover min-h-[160px]
        ${className}
      `}
    >
      {/* TOP */}
      <div>
        <span
          className={`material-symbols-outlined mb-4 ${
            isPrimary ? "" : "text-primary"
          }`}
        >
          {card.icon}
        </span>

        <h3 className="text-xl text-gray-300 font-bold mb-2">{card.title}</h3>

        <p
          className={`mb-6 text-sm ${
            isPrimary ? "text-white/80" : "text-slate-400"
          }`}
        >
          {card.description}
        </p>
      </div>

      {/* TAGS */}
      {card.tags && (
        <div className="flex text-gray-300 flex-wrap gap-2">
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

      {/* PRIMARY FOOTER */}
      {isPrimary && (
        <div>
          <p className="text-xs opacity-80 uppercase tracking-widest font-bold">
            Currently in
          </p>
          <p className="text-lg font-bold">{card.description}</p>
        </div>
      )}
    </div>
  );
}
