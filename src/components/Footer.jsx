import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="Footer">
      <p>Mervyn Levis {year}</p>
    </div>
  );
}

export default Footer;
