import PDFViewer from "@/components/PDFViewer";
import samples from "../../../public/data/work-samples.json";

type Params = {
  params: { sampleId: string };
};

export default function Page({ params: { sampleId } }: Params) {
  const data = samples.find((sample) => sample.id === sampleId);

  return (
    <div className="prose prose-l prose-slate dark:prose-invert mx-auto">
      <PDFViewer data={data} />
      <p></p>
    </div>
  );
}
