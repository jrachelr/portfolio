import PortfolioCard from "./PortfolioCard";
import samples from "../public/data/work-samples.json";

export default async function PortfolioList() {
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
