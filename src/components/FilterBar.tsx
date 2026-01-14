"use client";

import { useState } from "react";

export default function FilterBar() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Repos" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full-stack" },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-[#2b3634] pb-8">
      <div className="flex gap-2 p-1 bg-[#1a2220] rounded-xl border border-[#2b3634] w-fit">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`h-10 px-6 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === filter.id
                ? "bg-primary text-white"
                : "text-[#a2b4b2] hover:text-white"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="relative w-full max-w-xs">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#a2b4b2] text-xl">
          search
        </span>
        <input
          className="w-full bg-[#1a2220] border border-[#2b3634] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-[#5a6b68]"
          placeholder="Filter by tech stack..."
          type="text"
        />
      </div>
    </div>
  );
}
