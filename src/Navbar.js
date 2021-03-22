import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Blogs</h1>
      </Link>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
