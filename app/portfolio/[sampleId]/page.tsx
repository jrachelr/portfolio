import samples from "../../../public/data/work-samples.json";

type Params = {
  params: { sampleId: number };
};

export default function Page({ params: { sampleId } }: Params) {
  const numID = Number(sampleId);
  const data = samples.find((sample) => sample.id === numID);
  // sampleID is a num
  console.log(data);
  console.log(sampleId);
  console.log(samples);

  return <section>{}</section>;
}
