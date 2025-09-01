"use client";

export default function TarjetaDinamica({
  info,
  colorFondo,
  colorTexto,
  ancho,
  activo,
}) {
    

  let tarjeta, tituloo, contenido;
  if (! activo) {
     tarjeta = {
      margin: "20px",
      backgroundColor: colorFondo,
      color: colorTexto,
      width: ancho,
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 10px 18px rgb(185, 184, 184)",
    };

     tituloo = {
      width: "100%",
      padding: "10px",
    };

     contenido = {
      color: colorTexto,
    };
  } else {
     tarjeta = {
      margin: "20px",
      backgroundColor: "#746567ff",
      color: "#020303ff",
      width: "300px",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 10px 18px rgb(185, 184, 184)",
    };

     tituloo = {
      width: "100%",
      padding: "10px",
    };

     contenido = {
      color: colorTexto,
    };
  }

  return (
    <div style={tarjeta}>
      <h1 style={tituloo}>{info.titulo}</h1>
      <article>
        <p style={contenido}>{info.contenido}</p>
      </article>
    </div>
  );
}
