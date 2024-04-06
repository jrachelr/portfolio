import { getSortedPostsData, getPostData } from "@/lib/posts";
import getFormattedDate from "@/lib/getFormattedDate";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <div className="p-6 prose prose-l prose-slate dark:prose-invert mx-auto">
      <h2 className="text-xl">{title}</h2>
      <p className="mt-0">{pubDate}</p>
      <article className="prose prose-base prose-slate dark:prose-invert mx-auto">
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p className="prose prose-sm prose-slate dark:prose-invert mx-auto">
          <Link href="/posts">← Back to all posts</Link>
        </p>
      </article>
    </div>
  );
}
