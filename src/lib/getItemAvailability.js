export async function getItemAvailability(itemId) {
  try {
    const response = await fetch("http://localhost:3000/api/availability", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        locations: ["E19B9C25-AC0D-4DA5-92CD-C4C66B13CD6C"],
        items: [itemId],
        itemIdentifierType: "PLU",
        locationIdentifierType: "Id",
      }),
    });

    const data = await response.json();
    const cantidadOnHand =
      data?.itemQuantities?.[0]?.quantities?.[0]?.onHand ?? 0;

    return cantidadOnHand;
  } catch (error) {
    console.error("Error al consumir la API:", error);
    return 0;
  }
}
