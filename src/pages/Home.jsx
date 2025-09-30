const noticias = [
  { id: 1, titulo: "Noticia 1", desc: "Contenido de la noticia 1" },
  { id: 2, titulo: "Noticia 2", desc: "Contenido de la noticia 2" },
  { id: 3, titulo: "Noticia 3", desc: "Contenido de la noticia 3" },
];

export default function Home() {
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Últimas noticias</h2>
      <ul>
        {noticias.map((n) => (
          <li key={n.id} style={{ marginBottom: "1rem" }}>
            <h3>{n.titulo}</h3>
            <p>{n.desc}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
