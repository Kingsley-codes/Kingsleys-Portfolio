import {
  FiCpu,
  FiLayers,
  FiCpu as FiSettings,
  FiCode as FiJs,
} from "react-icons/fi";

export default function TechStack() {
  const techItems = [
    {
      icon: <FiCpu className="text-4xl" />,
      name: "Next.js",
      description: "App Router / SSR / ISR",
    },
    {
      icon: <FiLayers className="text-4xl" />,
      name: "React",
      description: "Hooks / Context / Redux",
    },
    {
      icon: <FiSettings className="text-4xl" />,
      name: "Express.js",
      description: "RESTful API / Auth",
    },
    {
      icon: <FiJs className="text-4xl" />,
      name: "TypeScript",
      description: "Static Typing / Safety",
    },
  ];

  return (
    <section className="bg-white/5 py-24 border-y border-white/5" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-4">
          <div>
            <h2 className="text-3xl font-bold mb-4">Core Tech Stack</h2>
            <p className="text-slate-400">
              The tools I use to turn ideas into production-ready software.
            </p>
          </div>
          <div className="text-[#E9C46A] font-mono text-sm border-l-2 border-[#E9C46A] pl-4">
            3+ Years Experience
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {techItems.map((item, index) => (
            <div
              key={index}
              className="group bg-[#2B2B2B] border border-white/10 p-8 rounded-xl hover:border-[#2c9b8c]/50 transition-all text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-white/5 rounded-2xl flex items-center justify-center text-[#2c9b8c] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-xs text-slate-500 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
