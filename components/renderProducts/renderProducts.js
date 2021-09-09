import ProductThumbnail from "../productThumbnail/productThumbnail";
import productsLayout from "./ProductsLayout.module.css";
import { CategoryContext } from "../categoryContext/CategoryContext";
import { useContext } from "react";

export default function RenderProducts({ products }) {
  const { category } = useContext(CategoryContext);

  return (
    <div className={productsLayout.products}>
      {products
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
          <ProductThumbnail
            key={id}
            image={image}
            title={title}
            rating={rating}
            id={id.toString()}
          />
        ))}
    </div>
  );
}
