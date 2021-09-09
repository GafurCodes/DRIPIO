import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { FilterContext } from "../components/filterContext/FilterContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <FilterContext.Provider value={"test"}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FilterContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
