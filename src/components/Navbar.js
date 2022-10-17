import React from "react";
import links from "../constants/links.js";
import { Link } from "gatsby";
const Navbar = () => {
  return (
    <nav className="nav__primary">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
