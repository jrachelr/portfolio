import { WorkSample } from "@/lib/workSamples";
import Link from "next/link";

type Props = {
  sample: WorkSample;
};

export default function PortfolioCard({ sample }: Props) {
  const { id, title } = sample;

  return (
    <li className="mt-4 text-xl dark:text-white/90">
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/portfolio/${id}`}
      >
        {title}
      </Link>
    </li>
  );
}
