import {
  FiServer,
  FiSmartphone,
  FiPackage,
  FiTool,
  FiCloud,
  FiGitBranch,
  FiTerminal,
} from "react-icons/fi";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaAws, FaVuejs, FaNodeJs, FaShieldAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiPrisma,
  SiJest,
} from "react-icons/si";

export default function TechStack() {
  const techCategories = [
    {
      category: "Frontend",
      skills: [
        {
          icon: <RiNextjsLine className="text-3xl" />,
          name: "Next.js",
          description: "App Router / SSR / ISR",
          level: "Expert",
        },
        {
          icon: <FaReact className="text-3xl" />,
          name: "React",
          description: "Hooks / Context / Redux",
          level: "Advanced",
        },
        {
          icon: <FiSmartphone className="text-3xl" />,
          name: "React Native",
          description: "Cross-platform Mobile",
          level: "Advanced",
        },
        {
          icon: <FaVuejs className="text-3xl" />,
          name: "Vue.js",
          description: "Composition API / Pinia",
          level: "Intermediate",
          class: "hidden",
        },
        {
          icon: <SiTypescript className="text-3xl" />,
          name: "TypeScript",
          description: "Static Typing / Safety",
          level: "Expert",
        },
        {
          icon: <RiTailwindCssFill className="text-3xl" />,
          name: "Tailwind CSS",
          description: "Utility-first Styling",
          level: "Expert",
        },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          icon: <FaNodeJs className="text-3xl" />,
          name: "Node.js",
          description: "Runtime / Event Loop",
          level: "Expert",
        },
        {
          icon: <SiExpress className="text-3xl" />,
          name: "Express.js",
          description: "RESTful API / Middleware",
          level: "Expert",
        },
        {
          icon: <FaShieldAlt className="text-3xl" />,
          name: "Auth.js",
          description: "Authentication / OAuth",
          level: "Advanced",
          class: "hidden",
        },
        {
          icon: <FiServer className="text-3xl" />,
          name: "Fastify",
          description: "High-performance APIs",
          level: "Intermediate",
          class: "hidden",
        },
        {
          icon: <FiCloud className="text-3xl" />,
          name: "Serverless",
          description: "AWS Lambda / Vercel",
          level: "Intermediate",
          class: "hidden",
        },
        {
          icon: <SiGraphql className="text-3xl" />,
          name: "GraphQL",
          description: "Apollo / Type-safe Queries",
          level: "Intermediate",
        },
      ],
    },
    {
      category: "Database & Tools",
      skills: [
        {
          icon: <SiPostgresql className="text-3xl" />,
          name: "PostgreSQL",
          description: "Relational Database",
          level: "Advanced",
        },
        {
          icon: <SiMongodb className="text-3xl" />,
          name: "MongoDB",
          description: "NoSQL / Aggregation",
          level: "Expert",
        },
        {
          icon: <SiRedis className="text-3xl" />,
          name: "Redis",
          description: "Caching / PubSub",
          level: "Advanced",
        },
        {
          icon: <SiPrisma className="text-3xl" />,
          name: "Prisma",
          description: "ORM / Type-safe",
          level: "Advanced",
        },
        {
          icon: <FiGitBranch className="text-3xl" />,
          name: "Git & GitHub",
          description: "Version Control / CI/CD",
          level: "Advanced",
          class: "hidden",
        },
        {
          icon: <FiTerminal className="text-3xl" />,
          name: "Docker",
          description: "Containerization",
          level: "Advanced",
          class: "hidden",
        },
      ],
    },
    {
      category: "Testing & DevOps",
      skills: [
        {
          icon: <SiJest className="text-3xl" />,
          name: "Jest",
          description: "Unit & Integration Testing",
          level: "Advanced",
          class: "hidden",
        },
        {
          icon: <FiTool className="text-3xl" />,
          name: "Cypress",
          description: "E2E Testing",
          level: "Intermediate",
          class: "hidden",
        },
        {
          icon: <FaAws className="text-3xl" />,
          name: "AWS",
          description: "EC2 / S3 / RDS",
          level: "Intermediate",
        },
        {
          icon: <FiCloud className="text-3xl" />,
          name: "Vercel",
          description: "Deployment / Edge Functions",
          level: "Expert",
        },
        {
          icon: <FiPackage className="text-3xl" />,
          name: "Webpack / Vite",
          description: "Build Tools / Bundling",
          level: "Intermediate",
          class: "hidden",
        },
        {
          icon: <FiTerminal className="text-3xl" />,
          name: "Linux / CLI",
          description: "Server Management",
          level: "Intermediate",
        },
      ],
    },
  ];

  return (
    <section className="bg-white/5 py-24 border-y border-white/5" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-4">
          <div>
            <h2 className="md:text-4xl text-3xl text-primary font-bold mb-4">
              Tech Stack & Skills
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              My comprehensive toolkit for building modern, scalable
              applications from concept to deployment.
            </p>
          </div>
          <div className="text-[#E9C46A] font-mono text-sm border-l-2 border-[#E9C46A] pl-4">
            4+ Years Full Stack Experience
          </div>
        </div>

        {/* Tech Categories */}
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <div className="flex items-center gap-4 mb-6 px-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <h3 className="text-2xl font-bold text-gray-300 whitespace-nowrap">
                  {category.category}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 px-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`group relative bg-[#2B2B2B] border border-white/10 p-6 rounded-xl hover:border-[#2c9b8c]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#2c9b8c]/10 ${
                      skill.class || ""
                    } sm:block`}
                  >
                    {/* Skill level indicator */}
                    <div className="absolute top-3 right-3">
                      <div className="flex gap-1">
                        {["Beginner", "Intermediate", "Advanced", "Expert"].map(
                          (levelName, i) => {
                            const levelIndex = [
                              "Beginner",
                              "Intermediate",
                              "Advanced",
                              "Expert",
                            ].indexOf(skill.level);
                            const isFilled = levelIndex >= i;

                            const colorMap: Record<number, string> = {
                              0: "bg-orange-500",
                              1: "bg-yellow-500",
                              2: "bg-lime-500",
                              3: "bg-[#2c9b8c]",
                            };

                            return (
                              <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full ${
                                  isFilled ? colorMap[i] : "bg-white/10"
                                }`}
                              />
                            );
                          }
                        )}
                      </div>
                    </div>

                    <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-white/5 to-transparent rounded-xl flex items-center justify-center text-[#2c9b8c] group-hover:text-[#38d9a9] transition-colors">
                      {skill.icon}
                    </div>

                    <h3 className="font-bold text-primary text-sm md:text-lg mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-400 mb-3">
                      {skill.description}
                    </p>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#E9C46A] font-mono">
                        {skill.level}
                      </span>
                      <div className="text-slate-500 group-hover:text-[#2c9b8c] transition-colors">
                        ▸
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 px-4">
          <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl text-gray-300 font-bold mb-6">
              Additional Technologies & Tools
            </h3>
            <div className="flex text-gray-400 flex-wrap gap-3">
              {[
                "React Query",
                "Socket.io",
                "WebSockets",
                "Stripe API",
                "SendGrid",
                "JWT",
                "OAuth 2.0",
                "Webpack",
                "Babel",
                "ESLint",
                "Prettier",
                "Figma",
                "Adobe XD",
                "Storybook",
                "NPM/Yarn",
                "PM2",
                "NGINX",
                "PM2",
                "Postman",
                "Insomnia",
                "Jira",
                "Notion",
              ].map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
