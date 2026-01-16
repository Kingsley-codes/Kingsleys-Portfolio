export default function PageHeading() {
  return (
    <div className="mb-12 mt-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl md:text-6xl font-semibold leading-none tracking-tighter text-white uppercase">
          Project <span className="text-primary opacity-50">Archive</span>
        </h1>
        <p className="text-[#a2b4b2] text-lg max-w-2xl mt-4 leading-relaxed font-light">
          A technical vault documenting the architectural evolution of
          full-stack engineering and design explorations.
        </p>
      </div>
    </div>
  );
}
