import Image from "next/image";
import styles from "./Product.module.css";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";
import { useSpring, animated } from "react-spring";

export default function Product({ rating, image, title, id }) {
  //config for the render animation
  const props = useSpring({
    config: {
      duration: 1000,
    },
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  return (
    //animated.div is a way to tell react spring (animation library) that this div needs to be animated
    <animated.div className={styles.products} style={props}>
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
              {/* ReactStars is a component from a library that renders out stars with different settings. In this case, I used them for the api ratings. */}
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
    </animated.div>
  );
}
