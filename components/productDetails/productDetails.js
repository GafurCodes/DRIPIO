import Image from "next/image";

export default function ProductDetails({
  title,
  price,
  description,
  category,
  image,
  rate,
  rateCount,
}) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{price}</h3>
      <h3>{category}</h3>
      <Image src={image} alt={title} width="700px" height="700px" />
      <h3>{rate}</h3>
      <h3>{rateCount}</h3>
    </>
  );
}
