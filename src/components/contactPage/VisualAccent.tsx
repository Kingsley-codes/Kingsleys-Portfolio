import { FiGlobe } from "react-icons/fi";

export default function VisualAccent() {
  return (
    <div className="mt-auto pt-8 border-t border-slate-200 dark:border-border-dark">
      <div className="relative h-48 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-border-dark group">
        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-40 bg-cover bg-center grayscale mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop')",
            }}
          />
          <div className="z-10 text-center">
            <FiGlobe className="text-primary text-4xl mb-2 mx-auto" />
            <p className="text-white font-mono text-xs uppercase tracking-widest">
              Global Ops // Active
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
