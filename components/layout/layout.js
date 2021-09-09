import { useState } from "react";
import { CategoryContext } from "../categoryContext/CategoryContext";
import Navbar from "../navbar/navbar";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  const [category, setCategory] = useState("Dripio");

  const getCategory = (categoryPassed) => setCategory(categoryPassed);

  return (
    <>
      <CategoryContext.Provider
        value={{
          category,
        }}
      >
        <Navbar passCategory={getCategory} />
        <main className={styles.main}>{children}</main>
      </CategoryContext.Provider>
    </>
  );
}
