export default function CTASection() {
  return (
    <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-[#1a2220] to-background-dark border border-primary/20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
        <span className="material-symbols-outlined text-[160px] text-primary">
          rocket_launch
        </span>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-white mb-2">
            Ready to initiate a new sequence?
          </h2>
          <p className="text-[#a2b4b2] text-lg leading-relaxed">
            Let&apos;s collaborate to build something performant, scalable, and
            technically superior. Currently accepting new project proposals.
          </p>
        </div>
        <button className="shrink-0 flex items-center justify-center gap-3 px-8 h-14 bg-primary text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(44,155,140,0.4)] transition-all">
          START_COLLABORATION
          <span className="material-symbols-outlined">alternate_email</span>
        </button>
      </div>
    </div>
  );
}
