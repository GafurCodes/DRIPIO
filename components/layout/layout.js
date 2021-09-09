import { useState } from "react";
import { FilterContext } from "../filterContext/FilterContext";
import FilterMenu from "../filterMenu/filterMenu";
import Navbar from "../navbar/navbar";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  const [category, setCategory] = useState("Dripio");

  const getCategory = (categoryPassed) => setCategory(categoryPassed);

  return (
    <>
      <FilterContext.Provider
        value={{
          category,
        }}
      >
        <Navbar passCategory={getCategory} />
        {/* <FilterMenu /> */}
        <main className={styles.main}>{children}</main>
      </FilterContext.Provider>
    </>
  );
}
