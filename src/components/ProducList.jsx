// src/components/ProductList.jsx
import products from "../data/products";
import ProductCard from "./ProductCard";
import "../styles/product.css";

export default function ProductList() {
  return (
    <section className="product-section">
      <h2>🌷 Nuestros Productos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
