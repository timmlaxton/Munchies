import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Yum Yum</h1>
        </Link>
        <SearchBar />
        <Link to="/create">
          <h1>Create Yum Yum</h1>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
