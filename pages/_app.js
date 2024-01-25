// Importar componentes de Chakra UI
import { ChakraProvider , extendTheme, ColorModeScript, theme } from '@chakra-ui/react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
