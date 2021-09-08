import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styles from "./itemQuantity.module.css";

export default function ItemQuantity({ passQuantity }) {
  const [count, setCount] = useState(1);

  useEffect(() => passQuantity(count), [count]);

  const reduceValue = () => {
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
      <input type="text" value={count} readOnly />
      <button onClick={() => increaseValue()}>+</button>
    </section>
  );
}
