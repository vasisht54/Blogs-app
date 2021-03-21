import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "React Hooks and Context",
      body:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum molestiae quod eum voluptate aspernatur! Aut incidunt suscipit iure numquam esse rerum eius et dolorum, cupiditate error, eum temporibus nemo! Saepe.",
      author: "M. Scott",
      id: 1,
    },
    {
      title: "Redux for state Management",
      body:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, aspernatur illo, natus perspiciatis modi pariatur sit nobis magni at nemo quis voluptas consequatur. Reprehenderit explicabo laudantium aspernatur, quidem ipsa libero.",
      author: "J. Halpert",
      id: 2,
    },
    {
      title: "Web Dev with React!",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id illum non dolorum eaque quasi. Eligendi obcaecati incidunt pariatur odio ea. Animi tempore repudiandae quis totam nisi. In porro totam provident!",
      author: "Oscar Martinez",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};
export default Home;
