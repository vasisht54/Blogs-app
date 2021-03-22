import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};
export default Home;
