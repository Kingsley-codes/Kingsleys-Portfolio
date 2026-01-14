"use client";

import Link from "next/link";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { AiOutlineCode } from "react-icons/ai";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-nav bg-[#0a0a0a]/95 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl md:text-2xl">
              <AiOutlineCode />
            </div>
            <h1 className="font-semibold text-gray-300 text-lg md:text-xl tracking-tight">
              Kingsley Agbam
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <div className="text-gray-200 flex items-center gap-8 text-sm font-medium opacity-80">
              <Link
                className="hover:text-[#2c9b8c] transition-colors"
                href="/about"
              >
                About
              </Link>
              <Link
                className="hover:text-[#2c9b8c] transition-colors"
                href="/projects"
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
                href="/contact"
              >
                Contact
              </Link>
            </div>

            <a href="mailto:agbamkingsley@gail.com">
              <button className="bg-[#2c9b8c] hover:bg-[#2c9b8c]/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2">
                Hire Me <FiArrowUpRight className="text-sm" />
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-[#2c9b8c] transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-white/5 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <div className="px-4 py-6 space-y-6">
            <Link
              className="block text-gray-300 hover:text-[#2c9b8c] transition-colors text-lg py-3 border-b border-white/5"
              href="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              className="block text-gray-300 hover:text-[#2c9b8c] transition-colors text-lg py-3 border-b border-white/5"
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              className="block text-gray-300 hover:text-[#2c9b8c] transition-colors text-lg py-3 border-b border-white/5"
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              className="block text-gray-300 hover:text-[#2c9b8c] transition-colors text-lg py-3 border-b border-white/5"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <a
                href="mailto:agbamkingsley@gail.com"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className="w-full bg-[#2c9b8c] hover:bg-[#2c9b8c]/90 text-white py-3.5 rounded-lg font-bold text-base transition-all flex items-center justify-center gap-2">
                  Hire Me <FiArrowUpRight className="text-base" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
