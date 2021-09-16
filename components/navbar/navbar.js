import styles from "./Navbar.module.css";
import NavbarLink from "../navbarLink/navbarLink";

import {
  FaMale,
  FaFemale,
  FaCarBattery,
  FaCrown,
  FaArrowLeft,
  FaGithub,
} from "react-icons/fa";

export default function Navbar({ passCategory }) {
  // passes the category received from the navbarLink component up the tree to the layout component
  const getCategory = (categoryPassed) => passCategory(categoryPassed);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <NavbarLink
          text="Dripio"
          hrefPath="/"
          icon={<FaArrowLeft />}
          // it it's a logo, give it logo styles instead of regular nav item styles
          isLogo={true}
          passCategory={getCategory}
        />
        <NavbarLink
          text="Men's"
          hrefPath="/"
          icon={<FaMale />}
          passCategory={getCategory}
        />
        <NavbarLink
          text="Women's"
          hrefPath="/"
          icon={<FaFemale />}
          passCategory={getCategory}
        />
        <NavbarLink
          text="Jewelry"
          hrefPath="/"
          icon={<FaCrown />}
          passCategory={getCategory}
        />
        <NavbarLink
          text="Electronics"
          hrefPath="/"
          icon={<FaCarBattery />}
          passCategory={getCategory}
        />
        <NavbarLink
          text="GitHub"
          hrefPath="https://github.com/GafurCodes?tab=repositories"
          icon={<FaGithub />}
          // if it's a github link, give it its styles, which puts it on the bottom of the navbar
          isGithub={true}
        />
      </ul>
    </nav>
  );
}
