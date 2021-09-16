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
      // if it's a logo give it logo styles instead of the regular nav item styles
      className={isLogo ? styles.logo : styles.navItem}
      // passCategory here passes the text of a navbar link up the state tree to the Navbar component which then passes it to the Layout component which has a CategoryContext that passes the current category to the renderProducts component
      // since passCategory passes a string of text of the menu item clicked, I don't want it to pass "GitHub" as a category because it's just a link to my GitHub
      onClick={() => {
        if (!isGithub) passCategory(text);
      }}
    >
      <Link href={hrefPath}>
        <a
          className={styles.navLink}
          // if it's a github link, open it in a new tab
          target={isGithub ? "_blank" : "_self"}
        >
          <>{icon}</>
          <span className={styles.linkText}>{text}</span>
        </a>
      </Link>
    </li>
  );
}
