import Link from "next/link";
import styles from "./NavbarLink.module.css";

export default function navbarLink({ text, hrefPath, icon, isLogo }) {
  return (
    <li className={isLogo ? styles.logo : styles.navItem}>
      <Link href={hrefPath}>
        <a className={styles.navLink}>
          <>{icon}</>
          <span className={styles.linkText}>{text}</span>
        </a>
      </Link>
    </li>
  );
}
