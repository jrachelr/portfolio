import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function PostPreview({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="m-4 text-xl dark:text-white/90">
      <Link
        className="hover:underline hover:text-black/70 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-xs mt-1">{formattedDate}</p>
    </li>
  );
}
