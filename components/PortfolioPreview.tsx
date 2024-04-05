import { WorkSample } from "@/lib/workSamples";
import Link from "next/link";

const workSamples = [
  {
    title: "Q4 2015 US Office Market Trends",
    year: 2015,
    company: "JLL",
    type: "presentation",
    url: "work-samples/q4-2015-office-market-trends.pdf",
    id: "q4-2015-office-market-trends",
  },

  {
    title: "Venture Capital Infographic",
    year: 2015,
    company: "JLL",
    type: "Infographic",
    url: "work-samples/2015-VC-infographic.pdf",
    id: "2015-VC-infographic",
  },
];

export default function PortfolioPreview() {
  return (
    <ul>
      <li>
        <Link
          // className="underline hover:text-black/70 dark:hover:text-white"
          href={`/portfolio/${id}`}
        >
          Omnichannel Retail Whitepaper
        </Link>
        2018
      </li>
    </ul>
  );
}
