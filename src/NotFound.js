import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Oops! Page not found</h2>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default NotFound;
