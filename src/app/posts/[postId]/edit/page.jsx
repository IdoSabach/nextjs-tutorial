// domain.co.il/posts/postId/test
import PostForm from "./PostForm";
export default function PostsViewPage( {params} ) {

  return (
    <>
      <header>
        <h1>Post View {params.postId} Page</h1>
        <PostForm />
      </header>
    </>
  );
}
