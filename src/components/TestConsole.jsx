"use client";
import { useEffect } from "react";
import { fetchFromBigCommerce } from "../services/bigcommerceAPI";

// Puedes ajustar esta query a lo que tengas configurado en tu tienda
const TEST_QUERY = `
  query {
    site {
      products(first: 3) {
        edges {
          node {
            id
            name
            sku
          }
        }
      }
    }
  }
`;

export default function TestConsole() {
  useEffect(() => {
    async function test() {
      try {
        const data = await fetchFromBigCommerce(TEST_QUERY);
        console.log("✅ Conexión exitosa. Datos recibidos desde BigCommerce:");
        console.log(JSON.stringify(data, null, 2));
      } catch (error) {
        console.error("❌ Error al conectar con BigCommerce:", error.message);
      }
    }

    test();
  }, []);

  return (
    <p>Abre la consola del navegador para ver el resultado de la conexión.</p>
  );
}
