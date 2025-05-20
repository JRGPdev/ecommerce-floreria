// src/components/ProductList.jsx
"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/product.css";

export default function ProductList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/odbc-data/");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="product-list">
      {productos.map((producto) => {
        //console.log("Producto enviado a ProductCard:", producto);
        return <ProductCard key={producto.Id} producto={producto} />;
      })}
    </section>
  );
}
