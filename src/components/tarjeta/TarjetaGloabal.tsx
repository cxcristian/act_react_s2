import tStyles from "./tarjetaGloabal.module.css";
export default function TarjetaGlobal({ info, metodo }) {
  if (metodo === "global") {
    return (
      <div className="tarjeta-global">
        <h1 className="titulo-global">{info.titulo}</h1>
        <article className="contenido-global">
          <p>{info.contenido}</p>
          <p>color favorito: {info.color}</p>
        </article>
      </div>
    );
  }

  if (metodo === "module") {
    return (
        <div className={tStyles.tarjeta}>
            <div className={tStyles.encabezado}>
                <h1 className={tStyles.titulo}>{info.titulo}</h1>
            </div>
            <article className={tStyles.descripcion}>
                <p>{info.descripcion}</p>
                <p className={tStyles.categoria}>categoria: {info.categoria}</p>
            </article>
        </div>
    )
  }
if (metodo === "module-p") {
    return(
        <div className={tStyles.tarjetaPrimaria}>
            <h2>Primaria</h2>
            <div className={tStyles.encabezadoPrimaria}>
                <h1 className={tStyles.titulo}>{info.titulo}</h1>
            </div>
            <article className={tStyles.descripcionPrimaria}>
                <p>{info.descripcion}</p>
                <p className={tStyles.categoriaPrimaria}>categoria: {info.categoria}</p>
            </article>
        </div>
    )
}

if (metodo === "module-s") {
    return(
        <div className={tStyles.tarjetaSecundaria}>
            <h2>Secundaria</h2>
            <div className={tStyles.encabezadoSecundaria}>
                <h1 className={tStyles.titulo}>{info.titulo}</h1>
            </div>
            <article className={tStyles.descripcionSecundaria}>
                <p>{info.descripcion}</p>
                <p className={tStyles.categoriaSecundaria}>categoria: {info.categoria}</p>
            </article>
        </div>
    )
}

if (metodo === "module-e") {
    return(
        <div className={tStyles.tarjetaExito}>
            <h2>Éxito</h2>
            <div className={tStyles.encabezadoExito}>
                <h1 className={tStyles.titulo}>{info.titulo}</h1>
            </div>
            <article className={tStyles.descripcionExito}>
                <p>{info.descripcion}</p>
                <p className={tStyles.categoriaExito}>categoria: {info.categoria}</p>
            </article>
        </div>
    )
}
    
}
