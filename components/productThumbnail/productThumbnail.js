import Image from "next/image";
import styles from "./Product.module.css";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";

export default function Product({ rating, image, title, id }) {
  return (
    <div className={styles.products}>
      <Link href={`/products/${id}`}>
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
          </section>
        </a>
      </Link>
    </div>
  );
}
