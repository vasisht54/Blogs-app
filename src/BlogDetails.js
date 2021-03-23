import { useState } from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const [isDeletePending, setIsDeletePending] = useState(false);
  const history = useHistory();

  const handleDelete = () => {
    setIsDeletePending(true);
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      setIsDeletePending(false);
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          {!isDeletePending && <button onClick={handleDelete}>Delete</button>}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
