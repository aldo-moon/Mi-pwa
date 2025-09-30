import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import TaskList from './components/TaskList';

function App() {
  const [currentView, setCurrentView] = useState('tasks');

  return (
    <div className="app">
      <Header />
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="main-content">
        <div className="container">
          {currentView === 'products' && <ProductList />}
          {currentView === 'tasks' && <TaskList />}
          {currentView === 'about' && (
            <div className="about-section">
              <h2>📱 Sobre esta PWA</h2>
              <div className="info-card">
                <p>Esta es una Aplicación Web Progresiva (PWA) que funciona completamente offline.</p>
                <h3>✨ Características:</h3>
                <ul>
                  <li>🔄 Funciona sin conexión a internet</li>
                  <li>⚡ Carga instantánea desde caché</li>
                  <li>📦 Se puede instalar como app nativa</li>
                  <li>🎨 Diseño responsive y moderno</li>
                  <li>💾 Datos persistentes localmente</li>
                </ul>
                <div className="tech-stack">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Vite</span>
                  <span className="tech-badge">Service Workers</span>
                  <span className="tech-badge">PWA</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;