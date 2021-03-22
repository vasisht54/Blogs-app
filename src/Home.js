import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 800);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
      {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
    </div>
  );
};
export default Home;
