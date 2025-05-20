import { useEffect } from "react";
import { getProductsGraphQL } from "../services/bigcommerceApi";

export default function Home() {
  useEffect(() => {
    getProductsGraphQL();
  }, []);

  return <div>Revisa la consola del navegador para ver los productos</div>;
}
