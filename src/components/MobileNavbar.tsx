import React from "react";
import styles from "./styles/mobileNavbar.module.css";

function MobileNavbar() {
  const { container, navItems } = styles;
  return (
    <nav className={container}>
      <div className={navItems}>
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Projects</a>
        <a href="/">Contact</a>
      </div>
    </nav>
  );
}

export default MobileNavbar;
