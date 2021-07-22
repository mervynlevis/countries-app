import React from "react";
import { Link } from "react-router-dom";

function Header() {

  return (
    <div className="header">
      <Link className="headerLink" to="/countries-app">
        <h1 className="headerText">Countries App</h1>
      </Link>
    </div>
  );
}

export default Header;
