import { FaCheckCircle } from "react-icons/fa";

type Solution = {
  description: string;
  strategies: string[];
};

type Props = {
  data: Solution;
};

export default function SolutionSection({ data }: Props) {
  return (
    <section id="solution">
      <h2 className="text-3xl text-gray-300 font-bold mb-8 flex items-center gap-3">
        <span className="text-primary tracking-widest font-light">02.</span> The
        Solution
      </h2>

      <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
        {/* Description */}
        <p>{data.description}</p>

        {/* Key Strategies */}
        <div className="bg-surface-dark p-8 rounded-xl border border-white/5">
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">
            Key Strategy
          </h4>
          <ul className="space-y-4">
            {data.strategies.map((strategy, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>{strategy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
