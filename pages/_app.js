import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { CartContext } from "../components/cartContext/cartContext";
import Cart from "../components/cart/cart";
import { extendTheme } from "@chakra-ui/react";

//customizing chakraui default theme to include my colors
const theme = extendTheme({
  colors: {
    brand: {
      primary: "#08d9d6",
      bg: "#252a34",
      tertiary: "#eaeaea",
      accent: "#ff2e63",
    },
  },
});

function MyApp({ Component, pageProps }) {
  //keeping track of the cart (items that users add to the cart) component that I'm passing as context to be available globally
  const [cart, setCart] = useState([]);

  //making a callback function that will set the cart. I'm passing that function in the context to give the children the ability to update the cart.
  const getCartItems = (quantity, item) => {
    setCart((prevCart) => [...prevCart, { item, quantity }]);
  };

  return (
    <ChakraProvider theme={theme}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Layout>
          <Cart />
          <Component getCartItems={getCartItems} {...pageProps} />
        </Layout>
      </CartContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
