// domain.co.il/posts/new
import PostForm from "@/components/PostForm.jsx";

export const metadata = {
  title: "New Posts | Next.js",
  description: "New Posts Description by Next.js",
};

export default function NewPost() {
  return (
    <>
      <header>
        <h1>New Posts Page</h1>
      </header>
      <PostForm />
    </>
  );
}
