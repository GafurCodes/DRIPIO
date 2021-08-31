import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Product.module.css";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product({ rating, image, title }) {
  useEffect(async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    setData(data);
  }, []);

  const [data, setData] = useState();

  const notify = () =>
    toast.success("Added to cart", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className={styles.products}>
      <Link href="/">
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

            <button className={styles.addToCart} onClick={notify}>
              <span>Add to cart</span>
              {/* <span> icon</span> */}
            </button>
          </section>
        </a>
      </Link>

      <ToastContainer />
    </div>
  );
}
