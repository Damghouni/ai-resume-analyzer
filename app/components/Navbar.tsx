import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <Link to="/" className="text-2xl font-bold text-gradient">
        RESUMIND
      </Link>
    </nav>
  );
};

export default Navbar;
