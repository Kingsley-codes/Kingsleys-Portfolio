export default function PageHeading() {
  return (
    <div className="mb-12">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 text-primary mb-2">
          <span className="text-xs font-mono tracking-widest uppercase opacity-70">
            Directory: /home/archives
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black leading-none tracking-tighter text-white uppercase">
          Project_Archive{" "}
          <span className="text-primary opacity-50">[ROOT/REPOS]</span>
        </h1>
        <p className="text-[#a2b4b2] text-lg max-w-2xl mt-4 leading-relaxed font-light">
          A technical vault documenting the architectural evolution of
          full-stack engineering and design explorations.
        </p>
      </div>
    </div>
  );
}
