import { FiSmartphone, FiServer, FiDatabase } from "react-icons/fi";

export default function TechnicalSection() {
  const codeSnippet = `const useBoardState = (initialTasks) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  
  useEffect(() => {
    socket.on('task-update', (payload) => {
      dispatch({ type: 'SYNC_REMOTE', payload });
    });
    return () => socket.off('task-update');
  }, []);

  return { tasks, moveTask: (id, target) => dispatch({ id, target }) };
};`;

  return (
    <section id="technical">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <span className="text-primary tracking-widest font-light">03.</span>{" "}
        Technical Implementation
      </h2>
      <div className="space-y-12">
        {/* Code Snippet */}
        <div>
          <p className="text-slate-400 mb-6 italic">
            Optimized React Hook for managing complex board state:
          </p>
          <div className="code-block p-6 rounded-lg font-mono text-sm leading-relaxed overflow-x-auto text-slate-300">
            <pre>
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Architecture Diagram Simulation */}
        <div className="border border-white/10 rounded-xl p-8 bg-surface-dark/50">
          <h3 className="text-lg font-bold mb-10 text-center">
            System Architecture
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            <div className="flex flex-col items-center gap-3 z-10">
              <div className="size-16 rounded-full border-2 border-primary flex items-center justify-center bg-background-dark">
                <FiSmartphone className="text-primary text-2xl" />
              </div>
              <span className="text-xs font-bold uppercase text-slate-500">
                Next.js Client
              </span>
            </div>
            <div className="h-0.5 flex-1 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col items-center gap-3 z-10">
              <div className="size-16 rounded-full border-2 border-white/20 flex items-center justify-center bg-background-dark">
                <FiServer className="text-white/50 text-2xl" />
              </div>
              <span className="text-xs font-bold uppercase text-slate-500">
                Express API
              </span>
            </div>
            <div className="h-0.5 flex-1 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col items-center gap-3 z-10">
              <div className="size-16 rounded-full border-2 border-white/20 flex items-center justify-center bg-background-dark">
                <FiDatabase className="text-white/50 text-2xl" />
              </div>
              <span className="text-xs font-bold uppercase text-slate-500">
                PostgreSQL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
