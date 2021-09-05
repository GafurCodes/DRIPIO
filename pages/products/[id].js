import { useEffect, useState } from "react";
import Image from "next/image";

export default function Product({
  data: {
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  },
}) {
  return <></>;
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
