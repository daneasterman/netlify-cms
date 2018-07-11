import React from "react";
import Link from "gatsby-link";

import github from "../img/github-icon.svg";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <h1 className="navbar-item brand-title">Daniel Easterman</h1>
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
          href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
