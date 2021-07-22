import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="404">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Error;
