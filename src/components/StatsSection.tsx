export default function StatsSection() {
  return (
    <section className="py-32 border-y border-white/5 bg-background-dark ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-card-dark border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-sm text-slate-400">Years Experience</div>
          </div>

          <div className="bg-card-dark border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent-gold mb-2">40+</div>
            <div className="text-sm text-slate-400">Projects Delivered</div>
          </div>

          <div className="bg-card-dark border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-slate-400">Client Satisfaction</div>
          </div>

          <div className="bg-card-dark border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent-gold mb-2">∞</div>
            <div className="text-sm text-slate-400">Learning Mindset</div>
          </div>
        </div>
      </div>
    </section>
  );
}
