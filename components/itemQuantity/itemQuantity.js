import { useState, useEffect } from "react";
import styles from "./itemQuantity.module.css";

export default function ItemQuantity({ passQuantity }) {
  const [count, setCount] = useState(1);

  // passes quantity up the tree to the productDetails component
  useEffect(() => passQuantity(count), [count]);

  const reduceValue = () => {
    // makes sure the value isn't negative
    if (count != 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const increaseValue = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <section className={styles.container}>
      <button onClick={() => reduceValue()}>-</button>
      {/* readOnly because I don't want the user accidentally overriding the value manually. it is easier to do so with the controls that I provided */}
      <input type="text" value={count} readOnly />
      <button onClick={() => increaseValue()}>+</button>
    </section>
  );
}
