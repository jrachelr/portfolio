import React from "react";
import { getSortedPostsData } from "@/lib/posts";
import PostPreview from "./PostPreview";

export default function PostList() {
  const posts = getSortedPostsData();
  return (
    <section className="m-auto max-w-2xl">
      <ul className="w-full">
        {posts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
