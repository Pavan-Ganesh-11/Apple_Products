import React from "react";
import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <nav className="header-container">
      {/* <img
        src="https://i.ytimg.com/vi/tEtOHb_BVKU/hqdefault.jpg"
        alt="Pavan"
        className="nav-img"
      /> */}
      <h1 className="nav-logo-heading">Pavan</h1>
      <div className="navigation-details">
        <ul className="nav-list-container">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <li>
            <a href="#whychooseus" className="wcu-link">
              Why Choose Us?
            </a>
          </li>
          <Link to="/about" className="nav-link">
            <li>About</li>
          </Link>
          <Link to="/recipes" className="nav-link">
            <li>Recipes</li>
          </Link>
        </ul>
        <button type="button" className="header-logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
