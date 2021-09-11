import { useContext, useEffect, useState } from "react";
import { CartContext } from "../cartContext/cartContext";
import styles from "./Cart.module.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  const cart = useContext(CartContext);

  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    let itemQ = 0;

    cart.map((cartItem) => {
      itemQ += cartItem.quantity;
    });

    setItemQuantity(itemQ);
  }, [cart]);

  return (
    <div className={styles.cartContainer}>
      <FaShoppingCart /> {itemQuantity}
    </div>
  );
}
