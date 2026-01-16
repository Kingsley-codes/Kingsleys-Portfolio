import { FiCode, FiCpu, FiUsers, FiTarget } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section className="py-32 border-y border-white/5 bg-white/5" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left column - Text content */}
          <div className="lg:w-2/3 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-primary text-primary text-sm font-bold uppercase tracking-wider mb-6">
              <FiCode />
              About Me
            </div>

            <h2 className="text-3xl md:text-5xl text-gray-300 font-bold leading-tight">
              Building with <span className="text-gradient">purpose</span> and
              precision
            </h2>

            <div className="space-y-6 text-md text-slate-300 leading-relaxed">
              <p>
                I&apos;m <span className="text-gradient">Kingsley Agbam</span>,
                a full-stack web developer focused on building modern, scalable,
                and user-centric digital products. I work primarily with React,
                Next.js, Node.js, and Express, combining clean architecture with
                thoughtful UI to create applications that are fast, reliable,
                and easy to use. I enjoy turning complex ideas into simple,
                intuitive experiences.
              </p>

              <p>
                Over the years, I&apos;ve built platforms ranging from content
                management systems and e-commerce solutions to real-time
                applications, AI-powered learning tools, and purpose-driven
                products for startups and organizations. I care deeply about
                performance, maintainability, and writing code that grows well
                as products evolve.
              </p>

              <p>
                Beyond the code, I value clarity, collaboration, and continuous
                learning. Whether I&apos;m building a product from scratch or
                improving an existing system, my goal is always the same:
                deliver solutions that solve real problems and create lasting
                value.
              </p>
            </div>
          </div>

          {/* Right column - Values/Icons */}
          <div className="lg:w-1/3">
            <div className="bg-card-dark border text-gray-300 border-white/10 rounded-2xl p-8 space-y-8">
              <h3 className="text-2xl font-bold mb-6">What I Value</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiCpu className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Clean Architecture
                    </h4>
                    <p className="text-sm text-slate-400">
                      Scalable, maintainable systems that grow with your needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-12 bg-accent-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiUsers className="text-accent-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      User-Centric Design
                    </h4>
                    <p className="text-sm text-slate-400">
                      Intuitive experiences that solve real problems
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiTarget className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Purpose-Driven Work
                    </h4>
                    <p className="text-sm text-slate-400">
                      Building products that create meaningful impact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
