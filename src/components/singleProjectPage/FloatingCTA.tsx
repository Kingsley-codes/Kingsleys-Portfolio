"use client";

import { FiShare2 } from "react-icons/fi";

type Links = {
  live: string | null;
  source: string | null;
};

type Props = {
  links: Links;
};

export default function FloatingCTA({ links }: Props) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[calc(100%-48px)] max-w-sm">
      <div className="bg-background-dark/80 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl flex gap-2">
        {links.live ? (
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center transition-all"
          >
            View Live Project
          </a>
        ) : (
          <div className="flex-1 bg-primary/40 text-white/60 py-3 rounded-xl font-bold text-sm flex items-center justify-center cursor-not-allowed">
            No Live Link
          </div>
        )}

        <button
          type="button"
          className="size-12 bg-white/5 flex items-center justify-center rounded-xl border border-white/10"
        >
          <FiShare2 className="text-white" />
        </button>
      </div>
    </div>
  );
}
