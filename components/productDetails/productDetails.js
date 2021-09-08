import Image from "next/image";
import ItemQuantity from "../itemQuantity/itemQuantity";
import styles from "./productDetails.module.css";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

export default function ProductDetails({
  title,
  price,
  description,
  category,
  image,
  rate,
  rateCount,
}) {
  const [itemQuantity, setItemQuantity] = useState(1);

  const getItemQuantity = (itemQ) => {
    setItemQuantity(itemQ);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.product}>
        <section className={styles.text}>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={`${styles.thinText} ${styles.category}`}>
            {category}
          </h3>
          <h2 className={styles.description}>{description}</h2>
          <section className={styles.ratingAndPrice}>
            <section className={styles.rating}>
              <section className={styles.stars}>
                <ReactStars size={20} value={rate} edit={false} isHalf={true} />
                <h3 className={`${styles.thinText} ${styles.rate}`}>{rate}</h3>
              </section>
              <h3 className={`${styles.thinText} ${styles.rateCount}`}>
                ({rateCount} reviews)
              </h3>
            </section>
            <h3 className={`${styles.thinText} ${styles.price}`}>
              ${price * itemQuantity}
            </h3>
          </section>
          <section className={styles.controls}>
            <ItemQuantity passQuantity={getItemQuantity} />
            <button>Add To Cart</button>
          </section>
        </section>
        <Image
          src={image}
          alt={title}
          width="400px"
          height="400px"
          className={styles.productImage}
        />
      </div>
    </div>
  );
}
