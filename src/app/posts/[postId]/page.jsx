// domain.co.il/posts/postId

import Link from "next/link";

export default function PostsViewPage({ params }) {
  const { postId } = params;
  return (
    <>
      <header className="flex justify-between">
        <h1>Post View {params.postId} Page</h1>
        <div className="flex gap-4">
          <Link className="btn" href={`/posts/${postId}/edit`}>
            Edit
          </Link>
          <button className="btn--red">Delete</button>
        </div>
      </header>
    </>
  );
}
