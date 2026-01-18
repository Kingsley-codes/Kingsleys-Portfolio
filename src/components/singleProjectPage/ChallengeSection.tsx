type Props = {
  data: string[];
};

export default function ChallengeSection({ data }: Props) {
  return (
    <section id="challenge">
      <h2 className="text-3xl text-gray-300 font-bold mb-8 flex items-center gap-3">
        <span className="text-primary tracking-widest font-light">01.</span> The
        Challenge
      </h2>

      <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
        {data.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </section>
  );
}
