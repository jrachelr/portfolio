import Link from "next/link";

type Props = {
  sample: WorkSample;
};

export default function PortfolioCard({ sample }: Props) {
  const { id, title, year, company, type } = sample;

  return (
    <li className="m-4 text-xl dark:text-white/90">
      <Link href={`/portfolio/${id}`}>
        <div className="hover:underline hover:text-black/70 dark:hover:text-white">
          {title}
        </div>
        <div className="flex flex-row items-start relative text-xs">
          <span className="pr-2">{company}</span>
          <span className="pr-2">{type}</span>
        </div>
      </Link>
    </li>
  );
}
