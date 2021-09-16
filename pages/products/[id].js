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
  data,
  getCartItems,
}) {
  if (!data) return null;
  return (
    <ProductDetails
      title={title}
      price={price}
      description={description}
      category={category}
      image={image}
      rate={rate}
      rateCount={count}
      getCartItems={getCartItems}
    />
  );
}

//fetching individual proudct data
export async function getStaticProps({ params: { id } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

//telling nextjs to prerender a path for every product with the produdct's id. i.e. /product/1/ /product/2/ ...
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
