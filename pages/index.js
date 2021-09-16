import Head from "next/head";
import RenderProducts from "../components/renderProducts/renderProducts";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>DRIPIO</title>
        <meta name="description" content="E-commerce website" />
      </Head>

      <RenderProducts products={data} />
    </div>
  );
}

//fetching products and passing them to <RenderProducts/>
export async function getStaticProps() {
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
