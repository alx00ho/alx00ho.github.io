import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header text-2xl flex px-100 justify-between pt-8 p-4 border-b-2 border-stone-700 mb-8">
      <h1>
        <Link to="/">Alexander Ho</Link>
      </h1>
      <nav className="flex flex-col space-x-4 text-lg md:flex-row">
        <h1 className="ml-2">
          <Link to="/">Home</Link>
        </h1>
        <h1 className="ml-2">
          <Link to="/about-me">About Me</Link>
        </h1>
        <h1 className="ml-2">
          <Link to="/resume">Resume</Link>
        </h1>
        <h1 className="ml-2">
          <Link to="/projects">Projects</Link>
        </h1>
      </nav>
    </header>
  );
}
export default Header;
