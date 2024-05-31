// // domain.co.il/posts/postId/test
"use client";

import { useParams } from 'next/navigation';
import PostForm from '@/components/PostForm';

// export const metadata = {
//   title: "Edit Posts | Next.js",
//   description: "Edit Posts Description by Next.js",
// };

export default function PostsViewPage() {
  const { postId } = useParams();

  return (
    <>
      <header>
        <h1>Post View {postId} Page</h1>
        <PostForm />
      </header>
    </>
  );
}
