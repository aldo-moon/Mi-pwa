function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">⚡</div>
          <div className="brand">
            <h1>PWA Store</h1>
            <span className="tagline">Funciona sin límites</span>
          </div>
        </div>
        
        <div className="header-actions">
          <button className="icon-btn" aria-label="Notificaciones">
            🔔
          </button>
          <button className="icon-btn" aria-label="Usuario">
            👤
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;