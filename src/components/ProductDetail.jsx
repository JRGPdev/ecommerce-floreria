// src/components/ProductDetail.jsx
import "../styles/productDetail.css";

export default function ProductDetail({ producto }) {
  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <div className="product-image-container">
          <img
            src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=170667a&w=0&k=20&c=Q7gLG-xfScdlTlPGFohllqpNqpxsU1jy8feD_fob87U=" // Puedes cambiarlo si más adelante tienes una imagen real
            alt={producto.Name}
            className="product-image"
          />
        </div>
        <div className="product-info">
          <h1 className="product-title">{producto.Name}</h1>
          <p className="product-price">${Number(producto.Price).toFixed(2)}</p>
          <p className="product-description">
            {producto.Description || "Sin descripción disponible"}
          </p>
          <button className="product-button">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}
