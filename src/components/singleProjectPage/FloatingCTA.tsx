import { FiShare2 } from "react-icons/fi";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[calc(100%-48px)] max-w-sm">
      <div className="bg-background-dark/80 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl flex gap-2">
        <button className="flex-1 bg-primary text-white py-3 rounded-xl font-bold text-sm">
          View Project
        </button>
        <button className="size-12 bg-white/5 flex items-center justify-center rounded-xl border border-white/10">
          <FiShare2 className="text-white" />
        </button>
      </div>
    </div>
  );
}
