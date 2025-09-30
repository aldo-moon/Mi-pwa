export default function Navbar() {
  return (
    <nav style={{ background: "#eee", padding: "0.5rem" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li><a href="/">Inicio</a></li>
        <li><a href="#">Noticias</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
}
