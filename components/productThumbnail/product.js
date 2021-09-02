import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Product.module.css";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";
import { useToast } from "@chakra-ui/react";

export default function Product({ rating, image, title, id }) {
  const toast = useToast();

  const toastConfig = {
    title: "Added to cart.",
    description: "You can access your cart in the top-right corner.",
    status: "success",
    duration: 5000,
    isClosable: true,
  };

  return (
    <div className={styles.products}>
      <Link href={id}>
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
              <ReactStars
                size={20}
                value={rating.rate}
                edit={false}
                isHalf={true}
              />
              <span>{rating.rate} </span>
              <span>({rating.count} reviews)</span>
            </section>

            {/* <button
              className={styles.addToCart}
              onClick={() => toast(toastConfig)}
            >
              <span>Add to cart</span>
              <span> icon</span>
            </button> */}
          </section>
        </a>
      </Link>
    </div>
  );
}
