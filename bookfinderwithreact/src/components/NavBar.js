import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo" style={{ marginLeft: 20 }}>
            Book Finder
          </a>
          <ul
            id="nav-mobile"
            className="right hide-on-med-and-down"
            style={{ marginRight: 20 }}
          >
            <li>
              <a href="#!">Top Books</a>
            </li>
            <li>
              <a href="#!">Trending Books</a>
            </li>
            <li>
              <a href="#!">Profile</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
