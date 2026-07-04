import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto py-32 px-8">

      <h2 className="text-6xl font-black text-center mb-20">
        Why Choose Chronos AI?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <FeatureCard
          icon="🎤"
          title="AI Interview"
          description="Practice unlimited technical and HR interviews with realistic AI."
        />

        <FeatureCard
          icon="🧠"
          title="Smart Feedback"
          description="Receive detailed analysis about communication, confidence and technical skills."
        />

        <FeatureCard
          icon="📈"
          title="Progress Tracking"
          description="Track your interview improvement using intelligent analytics."
        />

      </div>

    </section>
  );
}