import Link from "next/link";
import styles from "./NavbarLink.module.css";

export default function navbarLink({
  text,
  hrefPath,
  icon,
  isLogo,
  isGithub,
  passCategory,
}) {
  return (
    <li
      className={isLogo ? styles.logo : styles.navItem}
      onClick={() => passCategory(text)}
    >
      <Link href={hrefPath}>
        <a className={styles.navLink} target={isGithub ? "_blank" : "_self"}>
          <>{icon}</>
          <span className={styles.linkText}>{text}</span>
        </a>
      </Link>
    </li>
  );
}
