export async function POST(req) {
  const body = await req.json();

  try {
    const response = await fetch(
      "https://apothe-test-us-chq.teamworkinsight.com/rta/itemsavailability/batchquantity",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Si necesitas autorización, añade aquí:
          Authorization: "4eaf115d-69fa-47e1-8ba8-88add011730f",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al consumir la API externa:", error);
    return new Response(
      JSON.stringify({ error: "Error al conectar con API externa" }),
      { status: 500 }
    );
  }
}
