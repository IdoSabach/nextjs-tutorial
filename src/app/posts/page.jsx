// domain.co.il/posts

import Link from "next/link";
import PostPage from "@/components/PostPage";

const POSTS = Array.from({length:30})

export default function Posts() {
  return (
    <>
      <header className="flex items-center mb-6">
        <h1>Posts Page</h1>
        <Link href="/posts/new" className="btn ml-auto">New Post</Link>
      </header>
      <ul className="grid grid-cols-3 gap-3">
        {POSTS.map((_,index) => (
          <PostPage key={index} postId={index.toString()}/>
        ))}
      </ul>
    </>
  );
}
