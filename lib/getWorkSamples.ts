export type WorkSample = {
  id: number;
  title: string;
  year: number;
  company: string;
  type: string;
  url: string;
  name: string;
};

export type workSamples = WorkSample[];

export default async function getAllWorkSamples() {
  const response = await fetch("public/data/work-samples.json");

  if (!response.ok) throw new Error("failed to fetch work samples");

  return response.json();
}
