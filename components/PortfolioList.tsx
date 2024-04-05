import { workSamples } from "@/lib/workSamples";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioList() {
  const samples = workSamples;
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <ul className="w-full">
        {samples.map((sample) => (
          <PortfolioCard key={sample.id} sample={sample} />
        ))}
      </ul>
    </section>
  );
}
