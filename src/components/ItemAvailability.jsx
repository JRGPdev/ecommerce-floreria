"use client";
import { useState } from "react";

export default function ItemAvailability(Iditem) {
  const [loading, setLoading] = useState(false);

  const fetchAvailability = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locations: ["E19B9C25-AC0D-4DA5-92CD-C4C66B13CD6C"],
          items: ["Iditem"],
          itemIdentifierType: "PLU",
          locationIdentifierType: "Id",
        }),
      });

      const data = await response.json();
      const cantidadOnHand =
        data?.itemQuantities?.[0]?.quantities?.[0]?.onHand ?? 0;

      console.log("Cantidad onHand:", cantidadOnHand);
      return cantidadOnHand; // ✅ retornás directamente
    } catch (error) {
      console.error("Error al consumir la API:", error);
      return 0; // En caso de error, también retornás 0
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={fetchAvailability}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Consultando..." : "Consultar disponibilidad"}
      </button>
    </div>
  );
}
