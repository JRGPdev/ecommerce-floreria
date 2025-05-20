// backend/server-odbc.js
import express from "express";
import cors from "cors";
import odbc from "odbc";

const app = express();
const PORT = 4000;

app.use(cors()); // permite peticiones desde tu frontend

app.get("/odbc-data", async (req, res) => {
  try {
    const connection = await odbc.connect("DSN=BigCommerce");
    const result = await connection.query(
      "SELECT * FROM Products WHERE IsVisible = '1'"
    );
    await connection.close();
    res.json(result);
  } catch (error) {
    console.error("Error al conectar al ODBC:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor ODBC corriendo en http://localhost:${PORT}`);
});
