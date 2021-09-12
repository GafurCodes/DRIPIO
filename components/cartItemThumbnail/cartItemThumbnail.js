import Image from "next/image";
import styles from "./CartItemThumbnail.module.css";

export default function CartItemThumbnail({ title, image, quantity, price }) {
  return (
    <div className={styles.item}>
      <section className={styles.imageAndInfo}>
        <Image src={image} alt={title} width={"150px"} height={"150px"} />
        <section className={styles.info}>
          <h1>{title}</h1>
          <h2 className={styles.quantity}>Quantity: {quantity}</h2>
        </section>
      </section>
      <h3 className={styles.price}>${price.toFixed(0) * quantity}</h3>
    </div>
  );
}
