import Products from "../components/Products";
import ThemeToggle from "../components/ToggleThemeButton";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch("http://localhost:3000/api/products");
      const newProducts = await response.json();
      setProducts(newProducts);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }

  if (error) {
    return <div>Error al cargar</div>;
  }

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Products data={products} />
      <ThemeToggle />
    </>
  );
}
