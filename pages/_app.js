import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { CartContext } from "../components/cartContext/cartContext";
import Cart from "../components/cart/cart";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  const getCartQuantity = (quantity, item) => {
    setCart((prevCart) => [...prevCart, { item, quantity }]);
  };

  console.log(cart);

  return (
    <ChakraProvider>
      <CartContext.Provider value={cart}>
        <Layout>
          <Cart />
          <Component getCartQuantity={getCartQuantity} {...pageProps} />
        </Layout>
      </CartContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
