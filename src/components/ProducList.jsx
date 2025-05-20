"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/product.css";
import { getProductsGraphQL } from "../services/bigcommerceAPI";

export default function ProductList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductsGraphQL();
        const edges = response?.data?.site?.products?.edges || [];

        const productosFormateados = edges.map(({ node }) => ({
          id: node.entityId,
          nombre: node.name,
          sku: node.sku,
          descripcion: node.plainTextDescription,
          precio: node.prices.basePrice?.value,
          imagen: node.images.edges[0]?.node.urlOriginal || "",
          alt: node.images.edges[0]?.node.altText || "",
        }));

        setProductos(productosFormateados);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="product-list">
      {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </section>
  );
}
