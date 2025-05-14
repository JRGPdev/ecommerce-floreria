import "../styles/globals.css";

export const metadata = {
  title: "Tienda de Flores",
  description: "Venta online de flores hermosas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="layout-wrapper">{children}</div>
      </body>
    </html>
  );
}
