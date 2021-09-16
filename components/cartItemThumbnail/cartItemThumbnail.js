import Image from "next/image";
import styles from "./CartItemThumbnail.module.css";
import { FaRegTimesCircle } from "react-icons/fa";

// nothing complicated here. just a template for the cartItem with html,css, and props
export default function CartItemThumbnail({
  title,
  image,
  quantity,
  price,
  id,
  passIdToRemove,
}) {
  return (
    <div className={styles.item}>
      <section className={styles.imageAndInfo}>
        <Image src={image} alt={title} width={"150px"} height={"150px"} />
        <section className={styles.info}>
          <h1>{title}</h1>
          <h2 className={styles.quantity}>Quantity: {quantity}</h2>
          {/* toFixed here rounds the price of the item to 0 decimal places */}
          <h3 className={styles.price}>${price.toFixed(0) * quantity}</h3>
        </section>
      </section>
      <button className={styles.closeBtn} onClick={() => passIdToRemove(id)}>
        <FaRegTimesCircle />
      </button>
    </div>
  );
}
