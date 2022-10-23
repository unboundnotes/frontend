import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import client from "~/graphql/apollo_client";
import theme from "~/theme";
import "../styles/globals.css";

import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
