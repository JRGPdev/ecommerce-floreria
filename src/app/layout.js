import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tienda de Flores",
  description: "Venta online de flores hermosas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <div className="layout-wrapper">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
