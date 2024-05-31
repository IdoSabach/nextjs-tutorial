import Link from "next/link";
import Image from "next/image";

export default function PostPage({ postId }) {
  return (
    <>
      <li className="rounded-lg shadow-lg bg-neutral-700">
        <Image
          src={`https://fakeimg.pl/600x400?text=Post ${postId}`}
          width="600"
          height="400"
          alt={`post ${postId}`}
          unoptimized
          className="rounded-t-lg"
          // priority={postId=='29'}
        />
        <Link href={`/posts/${postId}`}>
          <div className="p-4">
            <h4 className="text-xl text-neutral-50 font-medium">Title</h4>
            <p className="text-neutral-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate ipsum, cum harum illum illo culpa.
            </p>
          </div>
        </Link>
      </li>
    </>
  );
}
