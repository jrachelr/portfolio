export interface PDFViewerProps {
  data: WorkSample | undefined;
}

export default async function PDFViewer({ data }: PDFViewerProps) {
  return (
    <section className="mx-auto max-w-2xl p-auto">
      <iframe
        src={data?.src}
        allow="autoplay"
        height="480"
        width="640"
      ></iframe>
    </section>
  );
}
