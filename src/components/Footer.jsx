// src/components/Footer.jsx
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>Florería Bella</h2>
          <p>Flores frescas y elegantes para cada ocasión especial.</p>
        </div>

        <div className="footer-section links">
          <h3>Enlaces</h3>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contacto</h3>
          <p>📍 Santa Cruz, Bolivia</p>
          <p>📞 +591 71234567</p>
          <p>✉️ contacto@floreriabella.com</p>
        </div>

        <div className="footer-section social">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="#">
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/icons/youtube.svg" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Florería Bella. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
