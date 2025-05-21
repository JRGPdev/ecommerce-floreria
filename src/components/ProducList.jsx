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

        const productosFormateados = edges.map(({ node }) => {
          const sku = node.sku;
          const partesSku = sku.split("-");
          const itemId = partesSku.length > 1 ? partesSku[1] : partesSku[0]; // tomar parte después del guion o todo

          return {
            id: node.entityId,
            nombre: node.name,
            sku: sku,
            itemId: itemId,
            descripcion: node.plainTextDescription,
            precio: node.prices.basePrice?.value,
            imagen: node.images.edges[0]?.node.urlOriginal || "",
            alt: node.images.edges[0]?.node.altText || "",
          };
        });

        setProductos(productosFormateados);

        // Crear un array solo de itemIds
        const listaItems = productosFormateados.map((p) => p.itemId);
        //setItems(listaItems); // necesitas un estado nuevo llamado "items"
        console.log("Lista de itemIds:", listaItems);
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
