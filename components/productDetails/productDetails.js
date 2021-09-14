import Image from "next/image";
import ItemQuantity from "../itemQuantity/itemQuantity";
import styles from "./productDetails.module.css";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { useToast, Button } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

export default function ProductDetails({
  title,
  price,
  description,
  category,
  image,
  rate,
  rateCount,
  getCartItems,
}) {
  const [itemQuantity, setItemQuantity] = useState(1);

  const getItemQuantity = (itemQ) => {
    setItemQuantity(itemQ);
  };

  const generateKey = () => {
    return "id" + Math.random().toString(16).slice(2);
  };

  const toast = useToast();

  const props = useSpring({
    config: {
      duration: 1000,
    },
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  return (
    <animated.div className={styles.wrapper} style={props}>
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
              ${price.toFixed(0) * itemQuantity}
            </h3>
          </section>
          <section className={styles.controls}>
            <ItemQuantity passQuantity={getItemQuantity} />
            <Button
              leftIcon={<FaCartPlus />}
              size="lg"
              bg="brand.bg"
              color="brand.primary"
              onClick={() => {
                getCartItems(itemQuantity, {
                  title,
                  image,
                  price,
                  id: generateKey(),
                });

                toast({
                  title: "Item added.",
                  description: "We've added the item to your cart.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              Add To Cart
            </Button>
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
    </animated.div>
  );
}
