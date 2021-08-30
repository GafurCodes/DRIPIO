import styles from "./Navbar.module.css";
import NavbarLink from "../navbarLink/navbarLink";
import { FaMale, FaFemale, FaCarBattery, FaCrown } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <NavbarLink text="logo" hrefPath="#" icon={<FaMale />} isLogo={true} />
        <NavbarLink text="men's " hrefPath="#" icon={<FaMale />} />
        <NavbarLink text="women's  " hrefPath="#" icon={<FaFemale />} />
        <NavbarLink text="jewelry" hrefPath="#" icon={<FaCrown />} />
        <NavbarLink text="electronics" hrefPath="#" icon={<FaCarBattery />} />
      </ul>
    </nav>
  );
}
