import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32 text-center" id="contact">
      <div className="bg-[#2B2B2B] border border-white/5 rounded-3xl p-12 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2c9b8c]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E9C46A]/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

        <h2 className="text-3xl md:text-5xl text-gray-300 font-bold mb-8 relative z-10">
          Ready to build something{" "}
          <span className="text-[#2c9b8c]">extraordinary?</span>
        </h2>

        <p className="text-slate-300 text-md md:text-lg max-w-2xl mx-auto mb-12 relative z-10">
          Currently accepting freelance projects and full-time opportunities.
          Let&apos;s discuss your next big idea.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
          <a
            className="w-full sm:w-auto bg-[#2c9b8c] hover:bg-[#2c9b8c]/90 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all"
            href="mailto:agbamkingsley@gail.com"
          >
            Get In Touch
          </a>

          <div className="flex gap-4">
            <a
              className="w-14 h-14 bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center transition-all"
              href="https://github.com/Kingsley-codes"
            >
              <FiGithub />
            </a>
            <a
              className="w-14 h-14 bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center transition-all"
              href="https://www.linkedin.com/in/kingsley-agbam"
            >
              <FiLinkedin />
            </a>
            <a
              className="w-14 h-14 bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center transition-all"
              href="mailto:agbamkingsley@gmail.com"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
