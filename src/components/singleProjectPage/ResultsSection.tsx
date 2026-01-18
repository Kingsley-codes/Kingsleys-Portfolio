type ResultItem = {
  label: string;
  value: string;
};

type Props = {
  data: ResultItem[];
};

export default function ResultsSection({ data }: Props) {
  return (
    <section id="results">
      <h2 className="text-3xl text-gray-300 font-bold mb-8 flex items-center gap-3">
        <span className="text-primary tracking-widest font-light">04.</span>{" "}
        Results & Impact
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {data.map((result, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-primary/5 border border-primary"
          >
            <div className="text-3xl font-bold text-primary mb-2">
              {result.value}
            </div>
            <div className="text-sm text-slate-400">{result.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
