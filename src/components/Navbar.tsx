import React from "react";
import styles from "./styles/navbar.module.css";

function Navbar() {
  const { container, navItems } = styles;
  return (
    <nav className={container}>
      <img src={logo} alt="logo" />
      <div className={navItems}>
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Projects</a>
        <a href="/">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
