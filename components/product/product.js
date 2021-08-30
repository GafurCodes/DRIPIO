import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Product.module.css";

export default function Product() {
  useEffect(async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    setData(data);
  }, []);

  const [data, setData] = useState();

  return (
    <div className={styles.products}>
      {data ? (
        data.map(({ id, rating, image, title }) => (
          <div key={id}>
            <section className={styles.productCard}>
              <section className={styles.rating}>
                {rating.rate} ({rating.count} reviews)
              </section>
              <Image
                className={styles.image}
                src={image}
                alt={title}
                width="300"
                height="300px"
              />
              <h1 className={styles.title}>{title}</h1>
            </section>
            <section className={styles.purchaseButtons}>
              <button>Add To Cart</button>
              <button>Buy Now</button>
            </section>
          </div>
        ))
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}
