// src/components/ProductDetail.jsx
import "../styles/productDetail.css";

export default function ProductDetail({ producto }) {
  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <div className="product-image-container">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="product-image"
          />
        </div>
        <div className="product-info">
          <h1 className="product-title">{producto.nombre}</h1>
          <p className="product-price">${producto.precio.toFixed(2)}</p>
          <p className="product-description">{producto.descripcion}</p>
          <button className="product-button">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}
