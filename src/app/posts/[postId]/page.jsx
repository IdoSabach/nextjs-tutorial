// domain.co.il/posts/postId

export default function PostsViewPage( {params} ) {

  return (
    <>
      <header>
        <h1>Post View {params.postId} Page</h1>
      </header>
    </>
  );
}
