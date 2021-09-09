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
import { useEffect, useState } from "react";

export default function Navbar({ passCategory }) {
  const [category, setCategory] = useState("Dripio");

  const getCategory = (categoryPassed) => setCategory(categoryPassed);

  useEffect(() => passCategory(category), [category]);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <NavbarLink
          text="Dripio"
          hrefPath="/"
          icon={<FaArrowLeft />}
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
          isGithub={true}
        />
      </ul>
    </nav>
  );
}
