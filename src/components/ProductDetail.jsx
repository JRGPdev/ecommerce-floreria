// src/components/ProductDetail.jsx
import "../styles/product.css";

export default function ProductDetail({ producto }) {
  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="detail-image"
        />
        <div className="detail-info">
          <h2>{producto.nombre}</h2>
          <p className="price">${producto.precio}</p>
          <p className="description">{producto.descripcion}</p>
          <button className="add-to-cart">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}
