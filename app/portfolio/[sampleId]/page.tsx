import samples from "../../../public/data/work-samples.json";
import Link from "next/link";

type Params = {
  params: { sampleId: number };
};

export default function Page({ params: { sampleId } }: Params) {
  const numID = Number(sampleId);
  const data = samples.find((sample) => sample.id === numID);

  return (
    <div className="p-6 prose prose-l prose-slate dark:prose-invert mx-auto">
      <h2 className="text-xl">{data?.title}</h2>
      <p>{data?.url}</p>
      <section>
        <iframe
          id={data?.url}
          title={data?.title}
          className="aspect-auto w-full"
          src={data?.url}
        />
      </section>
      <p className="prose prose-sm prose-slate dark:prose-invert mx-auto">
        <Link href="/portfolio">← Back to all</Link>
      </p>
    </div>
  );
}
