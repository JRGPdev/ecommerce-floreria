// src/services/bigcommerceAPI.js

const STORE_HASH =
  "5813ab37fd9c47780a0ee75720c1fb6043e3708f19a638e056e04fe370d2221a";
const ACCESS_TOKEN = "kklcu1awcibtoyf7flgt1j4suxzzt17";

const BIGCOMMERCE_GRAPHQL_URL = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/graphql`;

/**
 * Realiza una consulta GraphQL a BigCommerce.
 * @param {string} query - La consulta GraphQL como string.
 * @param {object} variables - Las variables opcionales para la consulta.
 * @returns {Promise<object>} - Respuesta JSON con los datos.
 */
export async function fetchFromBigCommerce(query, variables = {}) {
  const response = await fetch(BIGCOMMERCE_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "X-Auth-Token": ACCESS_TOKEN,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Error de conexión: ${error}`);
  }

  const { data, errors } = await response.json();

  if (errors) {
    console.error("Errores GraphQL:", errors);
    throw new Error("Error en la consulta GraphQL.");
  }

  return data;
}
