// app/producto/[id]/page.jsx
"use client";
import { useEffect, useState } from "react";
import ProductDetail from "@/components/ProductDetail";

export default function ProductoPage({ params }) {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch("http://localhost:4000/odbc-data/");
        const data = await response.json();
        const prod = data.find((p) => p.Id === Number(params.id));
        setProducto(prod);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [params.id]);

  if (loading) return <div>Cargando producto...</div>;
  if (!producto) return <div>Producto no encontrado</div>;

  return <ProductDetail producto={producto} />;
}
