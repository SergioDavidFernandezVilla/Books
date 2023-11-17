import CardLibro from "./CardLibro";

export default function Contenido() {
  return (
    <div className="container">
      <header className="header_contenido_bienvenida">
        <h1 className="titulo_contenido_bienvenida">
          Conectando Páginas Virtuales:{" "}
          <span>Descubre el Universo de WebBooks</span>
        </h1>
      </header>
      <div className="container_texto">
        <p className="p_contenido_bienvenida">
          Sumérgete en el fascinante universo de la lectura digital con
          Conectando Páginas Virtuales: Descubre el Universo de WebBooks. Este
          título te invita a explorar una nueva era de la literatura en línea,
          donde las páginas virtuales se entrelazan para crear experiencias de
          lectura únicas.{" "}
        </p>
      </div>

      <div className="container_libros" id="libros">
        <CardLibro></CardLibro>
      </div>
    </div>
  );
}
