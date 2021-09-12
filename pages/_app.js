import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { CartContext } from "../components/cartContext/cartContext";
import Cart from "../components/cart/cart";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#08d9d6",
      bg: "#252a34",
      tertiary: "#eaeaea",
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  const getCartQuantity = (quantity, item) => {
    setCart((prevCart) => [...prevCart, { item, quantity }]);
  };

  return (
    <ChakraProvider theme={theme}>
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
