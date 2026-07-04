type Props = {
  title: string;

  value: string | number;
};

export default function StatsCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8">

      <p className="text-slate-400">
        {title}
      </p>

      <h2 className="mt-4 text-5xl font-bold text-cyan-400">
        {value}
      </h2>

    </div>
  );
}