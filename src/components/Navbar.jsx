function Navbar({ currentView, setCurrentView }) {
  const menuItems = [
    { id: 'tasks', label: 'Tareas', icon: '✅' },
    { id: 'products', label: 'Productos', icon: '🛍️' },
    { id: 'about', label: 'Acerca de', icon: 'ℹ️' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${currentView === item.id ? 'active' : ''}`}
            onClick={() => setCurrentView(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;