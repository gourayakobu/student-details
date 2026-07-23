import React from "react";

const Nav1 = () => {
  return (
    <nav className="navbar">
      <div className="logo">📱 Mobile Store</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Mobiles</a></li>
        <li><a href="#">Brands</a></li>
        <li><a href="#">Offers</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Nav1;