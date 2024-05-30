export default function PostForm() {
  return (
    <form>
      <div className="mb4">
        <label htmlFor="" className="postForm__label">Title</label>
        <input type="text" className="postForm__input" placeholder="Title"/>
      </div>
      <div className="mb4">
        <label htmlFor="" className="postForm__label">Body</label>
        <input type="text" className="postForm__input" placeholder="Body"/>
      </div>
      <button className="postForm__btn">SEND</button>
    </form>
  );
}
