"use client";
import { FaSearch } from "react-icons/fa";

export default function FilterBar() {
  return (
    <div className="flex w-full md:justify-end gap-6 mb-10 border-b border-[#2b3634] pb-8">
      <div className="relative w-full max-w-xs">
        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#a2b4b2] text-xl">
          <FaSearch />
        </span>
        <input
          className="w-full bg-[#1a2220] border border-[#2b3634] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-[#5a6b68]"
          placeholder="Search by project name..."
          type="text"
        />
      </div>
    </div>
  );
}
