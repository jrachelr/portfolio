import Link from "next/link";
import samples from "../public/data/work-samples.json";

type Props = {
  sample: WorkSample;
};

export default function PortfolioCard({ sample }: Props) {
  const { id, title, year, company, type } = sample;

  return (
    <li className="mt-4 text-xl dark:text-white/90">
      <Link href={`/portfolio/${id}`}>
        <h4 className="hover:underline hover:text-black/70 dark:hover:text-white">
          {title}
        </h4>
        <div className="flex flex-row items-start relative text-xs">
          <span className="pr-2">{company}</span>
          <span className="pr-2">{year}</span>
          <span className="pr-2">{type}</span>
        </div>
      </Link>
    </li>
  );
}
