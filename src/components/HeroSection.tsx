import { FiArrowDown, FiDownload, FiCode } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>

          <h1 className="text-5xl md:text-7xl text-gray-200 font-bold leading-[1.1] tracking-tight">
            Engineering scalable{" "}
            <span className="text-gradient">full-stack</span> solutions.
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            I build high-performance web applications using{" "}
            <span className="text-white border-b border-accent-gold">
              Next.js
            </span>{" "}
            and{" "}
            <span className="text-white border-b border-primary">Express</span>.
            Focused on architectural integrity and seamless user experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
              View Projects <FiArrowDown />
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2">
              Download CV <FiDownload />
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:block">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-gold rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-card-dark p-6 rounded-xl border border-white/10 aspect-square flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <FiCode className="text-primary text-4xl" />
                <span className="text-xs font-mono text-slate-500">v4.2.0</span>
              </div>

              <div className="space-y-4">
                <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                <div className="h-2 w-5/6 bg-white/10 rounded-full"></div>
              </div>

              <div className="text-sm font-mono text-accent-gold">
                const Kingsley = () =&gt; {"{"} <br />
                &nbsp;&nbsp;return &lt;FullStack /&gt;; <br />
                {"}"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
