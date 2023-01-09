import "reset-css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import PageLayout from "../components/pageLayout";

const theme = extendTheme({
  colors: {
    gray: {
      100: "*f5f5f5",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
          },
        },
      },
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      )}
    </ChakraProvider>
  );
}
