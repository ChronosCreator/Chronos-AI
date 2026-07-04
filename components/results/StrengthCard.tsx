"use client";

type Props = {
  title: string;
  items: string[];
};

export default function StrengthCard({
  title,
  items,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <div className="mt-6 space-y-3">

        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}