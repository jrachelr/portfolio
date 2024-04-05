import Link from "next/link";
import samples from "../public/data/work-samples.json";

type Props = {
  sample: WorkSample;
};

export default function PortfolioCard({ sample }: Props) {
  const { id, title, year, company, type } = sample;

  return (
    <li className="mt-4 text-xl dark:text-white/90">
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/portfolio/${id}`}
        // sample={sample}
      >
        {title}
        {year}
      </Link>
    </li>
  );
}
