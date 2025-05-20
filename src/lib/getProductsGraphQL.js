const query = `
query paginateProducts {
  site {
    products(first: 5) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          entityId
          name
          sku
          plainTextDescription
          prices {
            basePrice {
              value
            }
          }
          images {
            edges {
              node {
                urlOriginal
                altText
              }
            }
          }
        }
      }
    }
  }
}`;

export const getProductsGraphQL = async () => {
  const url = new URL(
    `https://store-${process.env.BIGCOMMERCE_STOREHASH}.mybigcommerce.com/graphql`
  );

  const res = await fetch(url.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.BIGCOMMERCE_STOREFRONT_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();
  console.log("Respuesta de la API:", data); // <-- Aquí ves los datos en consola
  return data;
};
