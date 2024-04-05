export type WorkSample = {
  id: string;
  title: string;
  year: number;
  company: string;
  type: string;
  url: string;
};

export const workSamples = [
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
  {
    id: "2017-cbre-retail-whitepaper",
    title: "Manhattan Retail Whitepaper",
    year: 2017,
    company: "CBRE",
    type: "whitepaper",
    url: "work-samples/2017-cbre-retail-whitepaper.pdf",
  },
  {
    id: "2018-cbre-retail-viewpoint",
    title: "Omnichannel Retail Whitepaper",
    year: 2018,
    company: "CBRE",
    type: "whitepaper",
    url: "public/work-samples/2018-cbre-retail-viewpoint.pdf",
  },
];
