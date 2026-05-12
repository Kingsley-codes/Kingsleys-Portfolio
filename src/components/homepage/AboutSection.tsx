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
                I&apos;m{" "}
                <span className="text-gradient font-semibold">
                  Kingsley Agbam
                </span>
                , a full-stack web developer focused on building modern,
                scalable, and user-centric digital products. I work primarily
                with React, Next.js, Node.js, and Express, combining clean
                architecture with thoughtful UI to create applications that are
                fast, reliable, and easy to use. I enjoy turning complex ideas
                into simple, intuitive experiences.
              </p>

              <p className="text-base md:text-lg leading-relaxed md:leading-normal">
                My journey into tech didn&apos;t start at a desk — it started in
                a classroom. After completing my studies, my first role was as a{" "}
                <span className="text-gradient font-semibold">
                  Computer Science Instructor
                </span>{" "}
                at ADEM Group of Schools, where I taught foundational computing
                and led students through live projects. Teaching forced me to
                understand things deeply, and that discipline became the
                foundation of everything I&apos;ve built since.
              </p>

              <p className="text-base md:text-lg leading-relaxed md:leading-normal">
                From there, I transitioned into industry as a{" "}
                <span className="text-gradient font-semibold">
                  Fullstack Developer
                </span>{" "}
                at CrownFM, where I got my hands dirty with authentication
                systems, role-based access control, and the kind of backend
                plumbing that keeps real products running. That experience
                sharpened my instinct for reliability and clean architecture.
              </p>

              <p className="text-base md:text-lg leading-relaxed md:leading-normal">
                Over the next few years, I grew into a focused{" "}
                <span className="text-gradient font-semibold">
                  Backend Engineer
                </span>{" "}
                — building payment flows and vendor systems at Proattire,
                shipping client products at Skilled Crow, and contributing to an{" "}
                <span className="text-gradient font-semibold">
                  AI-powered regulatory intelligence platform
                </span>{" "}
                at Emerj, where I integrated LLMs and built scraping pipelines
                for real-time policy monitoring.
              </p>

              <p className="text-base md:text-lg leading-relaxed md:leading-normal">
                Today at{" "}
                <span className="text-gradient font-semibold">Enforca</span>, I
                architect and maintain backend services across five distinct
                products — from ride-matching and donation platforms to
                micro-task systems and an Edu-tech mentorship platform. Four
                years in, the curiosity that started in a classroom is still
                what drives me forward.
              </p>

              <p className="text-base md:text-lg leading-relaxed md:leading-normal">
                Away from the terminal, I&apos;m probably deep in an anime arc,
                grinding ranked on PC, or losing track of time in an open-world
                game on my phone. I have a soft spot for{" "}
                <span className="text-gradient font-semibold">
                  superhero movies
                </span>{" "}
                — there&apos;s something about watching an ordinary person
                figure out how to carry an extraordinary responsibility that
                never gets old. Honestly, it&apos;s not that different from
                shipping a product at 2am.
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
