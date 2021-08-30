import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Product.module.css";
import Link from "next/link";

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
          <Link href="/" key={id}>
            <a>
              <section className={styles.productCard}>
                <Image
                  className={styles.image}
                  src={image}
                  alt={title}
                  width="300"
                  height="300px"
                />
                <h1 className={styles.title}>
                  {title.split(" ").map((word, index) => {
                    if (index < 5) return `${word} `;
                  })}
                </h1>
                <section className={styles.rating}>
                  {rating.rate} ({rating.count} reviews)
                </section>
              </section>
            </a>
          </Link>
        ))
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}
