import PDFViewer from "@/components/PDFViewer";
import samples from "../../../public/data/work-samples.json";
import Link from "next/link";

type Params = {
  params: { sampleId: number };
};

export default function Page({ params: { sampleId } }: Params) {
  const numID = Number(sampleId);
  const data = samples.find((sample) => sample.id === numID);

  return (
    <div className="prose prose-l prose-slate dark:prose-invert mx-auto">
      <PDFViewer data={data} />
      <p>
        <Link href="/portfolio">← Back to all</Link>
      </p>
    </div>
  );
}
