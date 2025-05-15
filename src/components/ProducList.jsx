// src/components/ProductList.jsx
import productos from "@/data/productos";
import ProductCard from "./ProductCard";
import "../styles/product.css";

export default function ProductList() {
  return (
    <section className="product-list">
      {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </section>
  );
}
