import React from "react";
import SearchBar from "./SearchBar";
import "../stylesheets/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div className="contenedor-nav">
      <div className="contenedor-interno-nav">
        <div className="interno-header">
          <h1>
            <span>M</span>ovies
          </h1>
        </div>

        <div className="interno-link">
          <div>
            <Link to="/" className="link">
              Home
            </Link>
          </div>
          <div>
            <Link to="/favorites" className="link">
              Favorites
            </Link>
          </div>
        </div>

        <div className="interno-search">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
