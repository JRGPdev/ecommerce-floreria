// src/components/ProductCard.jsx
import Link from "next/link";
import "../styles/productCard.css";

export default function ProductCard({ producto }) {
  return (
    <Link href={`/producto/${producto.id}`} className="card-link">
      <div className="product-card">
        <div className="card-image">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="card-content">
          <h3>{producto.nombre}</h3>
          <p>${producto.precio.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
