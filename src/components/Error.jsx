import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h1 className="errorHeading">404 - Page Not Found</h1>
      <h2>The page you are looking for doesn't exist or is unavailable</h2>
      <Link to="/">
        <button className="homeBtn">Home</button>
      </Link>
    </div>
  );
}

export default Error;
