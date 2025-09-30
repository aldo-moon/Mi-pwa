function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>PWA Store</h3>
          <p>Tu tienda que funciona en cualquier lugar</p>
        </div>
        
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#tareas">Tareas</a></li>
            <li><a href="#ayuda">Ayuda</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#twitter" aria-label="Twitter">🐦</a>
            <a href="#facebook" aria-label="Facebook">📘</a>
            <a href="#instagram" aria-label="Instagram">📷</a>
            <a href="#github" aria-label="GitHub">💻</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} PWA Store. Todos los derechos reservados.</p>
        <p className="offline-badge">✨ Funciona sin conexión</p>
      </div>
    </footer>
  );
}

export default Footer;