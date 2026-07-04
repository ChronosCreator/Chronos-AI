interface SectionHeadingProps {
  badge: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20">

      <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-cyan-300 text-sm">
        {badge}
      </span>

      <h2 className="mt-6 text-5xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-6 text-lg text-gray-400 leading-8">
        {description}
      </p>

    </div>
  );
}