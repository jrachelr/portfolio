export interface PDFViewerProps {
  data: WorkSample | undefined;
}

export default async function PDFViewer({ data }: PDFViewerProps) {
  return (
    <section className="mx-auto max-w-2xl p-auto">
      <iframe
        src={data?.name}
        allow="autoplay"
        height="auto"
        width="auto"
      ></iframe>
    </section>
  );
}
