import { useState } from "react";
import ProductDetails from "../../components/productDetails/productDetails";

export default function Product({
  data: {
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  },
  getCartItems,
}) {
  if (!data) return null;
  <ProductDetails
    title={title}
    price={price}
    description={description}
    category={category}
    image={image}
    rate={rate}
    rateCount={count}
    getCartItems={getCartItems}
  />;
}

export async function getStaticProps({ params: { id } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

//look into fallback

export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data = await res.json();

  const paths = data.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

// [{ params: { id: "2", id: "3" } }]
