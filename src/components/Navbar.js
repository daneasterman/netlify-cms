import React from "react";
import Link from "gatsby-link";
import github from "../img/icons/github.svg";
import twitter from "../img/icons/twitter.svg";
import linkedin from "../img/icons/linkedin.svg";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <Link className="navbar-item brand-title" to="/about">
          Daniel Easterman
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/">
          Blog
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>

        <a
          className="navbar-item"
          href="https://github.com/daneasterman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://www.linkedin.com/in/danieleasterman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={linkedin} alt="Linkedin" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://twitter.com/daneasterman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={twitter} alt="Twitter" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
