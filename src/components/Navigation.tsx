import Link from "next/link";
import { FiTerminal, FiArrowUpRight } from "react-icons/fi";
import { AiOutlineCode } from "react-icons/ai";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-nav">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl">
              <AiOutlineCode />
            </div>
            <h1 className="font-semibold text-gray-300 text-xl tracking-tight hidden sm:block">
              Kingsley Agbam
            </h1>
          </div>
        </Link>

        <div className="flex items-center gap-10">
          <div className="hidden text-gray-200 md:flex items-center gap-8 text-sm font-medium opacity-80">
            <Link
              className="hover:text-[#2c9b8c] transition-colors"
              href="#about"
            >
              About
            </Link>
            <Link
              className="hover:text-[#2c9b8c] transition-colors"
              href="#projects"
            >
              Projects
            </Link>
            <Link
              className="hover:text-[#2c9b8c] transition-colors"
              href="#skills"
            >
              Skills
            </Link>
            <Link
              className="hover:text-[#2c9b8c] transition-colors"
              href="#contact"
            >
              Contact
            </Link>
          </div>

          <a href="mailto:agbamkingsley@gail.com ">
            <button className="bg-[#2c9b8c] hover:bg-[#2c9b8c]/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2">
              Hire Me <FiArrowUpRight className="text-sm" />
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
