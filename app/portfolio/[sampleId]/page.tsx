import PDFViewer from "@/components/PDFViewer";
import samples from "../../../public/data/work-samples.json";
import Link from "next/link";
import { ArrowLeft } from "react-feather";
import Image from "next/image";

type Params = {
  params: { sampleId: string };
};

export default function Page({ params: { sampleId } }: Params) {
  const data = samples.find((sample) => sample.id === sampleId);

  return (
    <>
      <div className="p-6 prose prose-l prose-slate dark:prose-invert mx-auto">
        <h2 className="text-xl">{data?.title}</h2>
        <p className="prose dark:prose-invert">{data?.description}</p>
        <a href={data?.name} target="_blank">
          View {data?.type}
        </a>
        <Link href="/portfolio">
          <ArrowLeft />
        </Link>
      </div>
      {/* <div className="invisible max-w-0 max-h-0 sm:visible">
        <PDFViewer data={data} />
      </div> */}
    </>
  );
}
