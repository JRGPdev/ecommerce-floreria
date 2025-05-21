// src/components/ProductCard.jsx
import Link from "next/link";
import "../styles/productCard.css";

export default function ProductCard({ producto }) {
  const imagenPorDefecto =
    "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=170667a&w=0&k=20&c=Q7gLG-xfScdlTlPGFohllqpNqpxsU1jy8feD_fob87U=";

  return (
    <Link href={`/producto/${producto.id}`} className="card-link">
      <div className="product-card">
        <div className="card-image">
          <img
            src={producto.imagen || imagenPorDefecto}
            alt={producto.alt || "Producto sin imagen"}
          />
        </div>
        <div className="card-content">
          <h3>{producto.nombre}</h3>
          <p>${Number(producto.precio).toFixed(2)}</p>
          <p>{producto.sku}</p>
          <p>{producto.itemId}</p>
        </div>
      </div>
    </Link>
  );
}
