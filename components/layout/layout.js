import { useState } from "react";
import { CategoryContext } from "../categoryContext/CategoryContext";
import Navbar from "../navbar/navbar";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  // keeps track of the current product category which is passed as context <CategoryContext.Provider value={category}> below. which can be set from the navbar items. the default is "Dripio" which just shows all items.
  const [category, setCategory] = useState("Dripio");

  // receives the category passed from the navbar and sets it above.
  const getCategory = (categoryPassed) => setCategory(categoryPassed);

  return (
    <>
      {/* passes the current category to the renderProducts component */}
      <CategoryContext.Provider value={category}>
        {/* passCategory is a prop which receives a callback function to pass the product category up the tree here when a user clicks a navbar link */}
        <Navbar passCategory={getCategory} />
        <main className={styles.main}>{children}</main>
      </CategoryContext.Provider>
    </>
  );
}
