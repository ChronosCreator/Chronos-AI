import { InterviewResult } from "@/types/interview";

type Props = {
  interviews: InterviewResult[];
};

export default function InterviewList({
  interviews,
}: Props) {
  if (interviews.length === 0) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-slate-400">
        No interviews completed yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {interviews.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">
                {item.role}
              </h3>

              <p className="mt-2 text-slate-400">
                {item.difficulty} • {item.duration}
              </p>
            </div>

            <div className="text-right">
              <p className="text-4xl font-bold text-cyan-400">
                {item.score}%
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}