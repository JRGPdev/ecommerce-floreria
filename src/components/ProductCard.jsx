// src/components/ProductCard.jsx
import Link from "next/link";
import "../styles/productCard.css";

export default function ProductCard({ producto }) {
  return (
    <Link href={`/producto/${producto.Id}`} className="card-link">
      <div className="product-card">
        <div className="card-image">
          <img
            src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=170667a&w=0&k=20&c=Q7gLG-xfScdlTlPGFohllqpNqpxsU1jy8feD_fob87U="
            alt={producto.Name}
          />
        </div>
        <div className="card-content">
          <h3>{producto.Name}</h3>
          <p>${Number(producto.Price).toFixed(2)}</p>
          <p>{producto.Sku}</p>
        </div>
      </div>
    </Link>
  );
}
