import Head from "next/head";
import { useContext } from "react";
import { FilterContext } from "../components/filterContext/FilterContext";
import Product from "../components/productThumbnail/product";
import productsLayout from "../styles/ProductsLayout.module.css";

export default function Home({ data }) {
  const { category } = useContext(FilterContext);

  return (
    <div>
      <Head>
        <title>Da Shop</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={productsLayout.products}>
        {data
          .filter((product) => {
            switch (category) {
              case "Dripio":
                return product;
              case "Men's":
                return product.category === "men's clothing";
              case "Women's":
                return product.category === "women's clothing";
              case "Electronics":
                return product.category === "electronics";
              case "Jewelry":
                return product.category === "jewelery";
            }
          })
          .map(({ id, image, title, rating }) => (
            <Product
              key={id}
              image={image}
              title={title}
              rating={rating}
              id={id.toString()}
            />
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
