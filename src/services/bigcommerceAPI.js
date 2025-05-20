const query = `query paginateProducts {
    site {
      products(first: 30) {
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
  const storeHash = process.env.NEXT_PUBLIC_BIGCOMMERCE_STORE_HASH;

  console.log("a:", storeHash);
  const url = `https://store-${storeHash}.mybigcommerce.com/graphql`;

  const res = await fetch(url.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BIGCOMMERCE_STOREFRONT_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();
  console.log("Respuesta de la API:", data); // Muestra en consola
  return data;
};
