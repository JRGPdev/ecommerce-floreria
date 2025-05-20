// src/components/ProductDetail.jsx
import "../styles/productDetail.css";

export default function ProductDetail({ producto }) {
  const imagenPorDefecto =
    "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=170667a&w=0&k=20&c=Q7gLG-xfScdlTlPGFohllqpNqpxsU1jy8feD_fob87U=";

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <div className="product-image-container">
          <img
            src={producto.imagen || imagenPorDefecto}
            alt={producto.nombre}
            className="product-image"
          />
        </div>
        <div className="product-info">
          <h1 className="product-title">{producto.nombre}</h1>
          <p className="product-price">${Number(producto.precio).toFixed(2)}</p>
          <p className="product-description">
            {producto.descripcion || "Sin descripción disponible"}
          </p>
          <button className="product-button">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}
