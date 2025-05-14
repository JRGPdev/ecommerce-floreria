// src/components/Header.jsx
import Link from "next/link";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>Tienda de Flores</h1>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/productos">Productos</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}
