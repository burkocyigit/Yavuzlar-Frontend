import { Link } from "react-router-dom";
// sfc shorcut

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New</Link>
      </div>
    </nav>
  );
};

export default Navbar;
