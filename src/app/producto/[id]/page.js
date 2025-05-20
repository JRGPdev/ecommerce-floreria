// src/app/producto/[id]/page.js
import { getProductsGraphQL } from "@/services/bigcommerceAPI";
import ProductDetail from "@/components/ProductDetail";

export default async function ProductDetailPage({ params }) {
  const { id } = params;

  // Obtener todos los productos (puedes paginar más adelante)
  const data = await getProductsGraphQL();
  const productos = data.data.site.products.edges.map(({ node }) => ({
    id: node.entityId,
    nombre: node.name,
    sku: node.sku,
    descripcion: node.plainTextDescription,
    precio: node.prices.basePrice?.value,
    imagen: node.images.edges[0]?.node.urlOriginal || null,
  }));

  // Buscar el producto por ID
  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return <ProductDetail producto={producto} />;
}
