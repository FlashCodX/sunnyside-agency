import styles from "../styles/navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
function Navbar() {
  const { container, navItems, navBtn, mobileItems, items } = styles;
  const [navOpen, setOpen] = useState(false);
  return (
    <nav className={container}>
      <p>sunnyside</p>
      <div className={navItems}>
        <a href="#">About</a>
        <a href="/#">Services</a>
        <a href="/#">Projects</a>
        <a href="/#">Contact</a>
      </div>
      <GiHamburgerMenu className={navBtn} onClick={() => setOpen(!navOpen)} />
      {navOpen && (
        <div className={mobileItems}>
          <div className={items}>
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
