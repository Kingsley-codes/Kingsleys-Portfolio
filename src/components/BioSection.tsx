import { MdPersonSearch } from "react-icons/md";

export default function BioSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-20 md:mb-32 items-start">
      <div className="md:col-span-4 md:sticky md:top-24">
        <h2 className="text-2xl md:text-2xl font-bold text-gray-300 mb-4 flex items-center gap-2">
          <MdPersonSearch className="text-primary text-xl" />
          My Journey
        </h2>
        <div className="h-1 w-32 md:w-42 bg-primary mb-6" />
        <p className="text-slate-400 leading-relaxed text-sm md:text-sm">
          Based in Nigeria, working globally. My philosophy centers on clean
          code, semantic accessibility, and visual harmony.
        </p>
      </div>
      <div className="md:col-span-8 space-y-5 md:space-y-6 text-slate-300">
        <p className="text-base md:text-lg leading-relaxed md:leading-normal">
          I started my journey with a deep curiosity for how the internet
          connects people. This curiosity evolved into a professional mission to
          build tools that are not only functional but delightful to use.
        </p>
        <p className="text-base md:text-lg leading-relaxed md:leading-normal">
          Over the years, I've mastered the{" "}
          <span className="text-gradient font-semibold">MERN stack</span> and
          specialized in{" "}
          <span className="text-gradient font-semibold">Next.js</span>,
          embracing the shift towards server-side rendering and edge computing.
          I believe that a developer's job isn't just to write code, but to
          solve human problems through technology.
        </p>
        <p className="text-base md:text-lg leading-relaxed md:leading-normal">
          When I'm not in front of a screen, you'll find me exploring the latest
          in UI design trends or contributing to open-source projects that lower
          the barrier for new developers entering the field.
        </p>
      </div>
    </div>
  );
}
