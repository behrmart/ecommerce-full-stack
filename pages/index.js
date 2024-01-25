import Layout from "../components/Layout";
import { Image } from "@chakra-ui/react";
import Products from "../components/Products";
import ThemeToggle from "../components/ToggleThemeButton";

export default function Home() {
  return (
    <>
      <Layout>
        <Products />
        <ThemeToggle />
      </Layout>
    </>
  );
}
