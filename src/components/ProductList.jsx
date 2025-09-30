// src/components/ProductList.jsx
import { useState, useEffect } from 'react';
import '../index.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de API
    setTimeout(() => {
      const mockProducts = [
        { id: 1, name: 'Laptop HP', price: '$899', image: '💻' },
        { id: 2, name: 'Mouse Logitech', price: '$29', image: '🖱️' },
        { id: 3, name: 'Teclado Mecánico', price: '$120', image: '⌨️' },
        { id: 4, name: 'Monitor 27"', price: '$350', image: '🖥️' },
        { id: 5, name: 'Webcam HD', price: '$79', image: '📹' }
      ];
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="loading">Cargando productos...</div>;
  }

  return (
    <div className="product-list">
      <h2>📦 Catálogo de Productos</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-icon">{product.image}</div>
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;