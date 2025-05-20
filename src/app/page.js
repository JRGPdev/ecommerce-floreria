import Banner from "../components/Banner";
import ProductList from "../components/ProducList";

export default function HomePage() {
  return (
    <>
      <main>
        <Banner />
        <ProductList />
      </main>
    </>
  );
}

/* "use client";
import { useEffect } from "react";
import { getProductsGraphQL } from "../services/bigcommerceAPI";

export default function Home() {
  useEffect(() => {
    getProductsGraphQL();
  }, []);

  return <div>Revisa la consola del navegador para ver los productos</div>;
}
 */
