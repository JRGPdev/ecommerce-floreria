import productos from "@/data/productos";
import ProductDetail from "@/components/ProductDetail";

export default function ProductoPage({ params }) {
  const producto = productos.find((p) => p.id === params.id);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return <ProductDetail producto={producto} />;
}
