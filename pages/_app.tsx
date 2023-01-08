import 'reset-css'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import PlayerLayout from "../components/pageLayout.tsx"

const theme = extendTheme({
  colors: {
    gray: {
      100: "*f5f5f5"
    }
  },
  components: {
    Button: {
      variants: {
        link:{
          ":focus": {
            outline: "none"
          }
        }
      }
    }
  }
})
export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <PlayerLayout>
      <Component {...pageProps} />
    </PlayerLayout>
  </ChakraProvider>
}
