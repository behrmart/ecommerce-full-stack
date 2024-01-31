// Importar componentes de Chakra UI
import Layout from "../components/Layout";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
