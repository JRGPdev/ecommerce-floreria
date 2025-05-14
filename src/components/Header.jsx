// src/components/Header.jsx
import Link from "next/link";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">🌸 Florería Bella</div>
      <nav className="nav-links">
        <Link href="/">Inicio</Link>
        <Link href="/productos">Productos</Link>
        <Link href="/contacto">Contacto</Link>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            📸
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶️
          </a>
        </div>
      </nav>
    </header>
  );
}
