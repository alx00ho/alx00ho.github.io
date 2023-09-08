import "../css/Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isHamburgerOpen, setHamburgerOpen] = useState("false");

  const handleToggle = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header className="header text-2xl flex px-100 justify-between pt-8 p-4 border-b-2 border-stone-700 mb-8">
      <h1>
        <Link to="/">Alexander Ho</Link>
      </h1>
      <nav className="relative">
        <div className="flex text-lg md:flex-row">
          <div className="hidden md:flex w-full md:space-x-8">
            <h1 className="">
              <Link to="/">Home</Link>
            </h1>
            <h1 className="">
              <Link to="/about-me">About Me</Link>
            </h1>
            <h1 className="">
              <Link to="/resume">Resume</Link>
            </h1>
            <h1 className="">
              <Link to="/projects">Projects</Link>
            </h1>
          </div>
        </div>
        <div className="hamburger md:hidden block focus:outline-none">
          <button
            id="menu-btn"
            className={`${
              isHamburgerOpen ? "open" : ""
            } block hamburger z-10 md:hidden focus:outline-none flex-end`}
            onClick={handleToggle}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        <div className="">
          <div
            id="mobile=menu"
            className={`${
              isHamburgerOpen ? "" : "hidden"
            } text-sm absolute -translate-x-20 -mt-12 bg-white px-8 py-4 pt-16 rounded border-2 border-stone-700`}
          >
            <h1 className="" onClick={handleToggle}>
              <Link to="/">Home</Link>
            </h1>
            <h1 className="" onClick={handleToggle}>
              <Link to="/about-me">About Me</Link>
            </h1>
            <h1 className="" onClick={handleToggle}>
              <Link to="/resume">Resume</Link>
            </h1>
            <h1 className="" onClick={handleToggle}>
              <Link to="/projects">Projects</Link>
            </h1>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
