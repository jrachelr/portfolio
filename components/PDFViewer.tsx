import samples from "../public/data/work-samples.json";

export interface PDFViewerProps {
  data: WorkSample | undefined;
}

export default async function PDFViewer({ data }: PDFViewerProps) {
  return (
    <section className="mx-auto max-w-2xl">
      {/* <h2 className="mt-0 text-xl">{data?.title}</h2> */}
      <iframe
        src={data?.src}
        allow="autoplay"
        height="480"
        width="640"
      ></iframe>
    </section>
  );
}
