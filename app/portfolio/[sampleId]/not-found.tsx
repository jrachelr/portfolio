export default function NotFound() {
  return <h3>The requested document does not exist.</h3>;
}

// import { workSamples } from "@/lib/workSamples";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// export function generateStaticParams() {
//   const samples = workSamples;

//   const sampleData = samples.map((sample) => ({
//     sampleID: sample.id,
//     title: sample.title,
//     company: sample.company,
//     type: sample.type,
//     year: sample.year,
//     url: sample.url,
//   }));
//   return sampleData;
// }

// export default async function Page({
//   params,
// }: {
//   params: { sampleID: string };
// }) {
//   const sampleID = params;
//   if (!sampleID) notFound();

//   const samples = workSamples;

//   return (
//     <div className="p-6 prose prose-l prose-slate dark:prose-invert mx-auto">
//       <h2 className="text-2xl">{sampleID}</h2>
//       <section></section>
//       <p className="prose prose-sm prose-slate dark:prose-invert mx-auto">
//         <Link href="/portfolio">← Back to all</Link>
//       </p>
//     </div>
//   );
// }
