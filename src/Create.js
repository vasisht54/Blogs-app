import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("M. Scott");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    setTimeout(() => {
      const newBlog = { title, body, author };
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-type": "application/JSON" },
        body: JSON.stringify(newBlog),
      }).then(() => {
        setIsPending(false);
        history.push("/");
      });
    }, 500);
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="J. Halpert">J. Halpert</option>
          <option value="Oscar Martinez">Oscar Martinez</option>
          <option value="M. Scott">M. Scott</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Submitting...</button>}
      </form>
    </div>
  );
};

export default Create;
