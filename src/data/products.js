// src/data/products.js

const products = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `Ramo Elegante ${i + 1}`,
  price: (20 + i * 3).toFixed(2),
  image: `https://elblogverde.com/wp-content/uploads/2016/03/cuales-son-las-flores-de-primavera-cineraria.jpg`,
}));

export default products;
