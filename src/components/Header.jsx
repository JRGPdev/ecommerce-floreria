// src/components/Header.jsx
"use client";
// src/components/Header.jsx
import { useState } from "react";
import Link from "next/link";
import "../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className="logo">🌸 Florería Bella</div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
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
