import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { data } from "../service/data"; //

const LibroPage = () => {
  const { slug } = useParams();

  // Encuentra el libro correspondiente al slug
  const libroSeleccionado = data.libros.find((libro) => libro.slug === slug);

  // Verifica si el libro existe
  if (!libroSeleccionado) {
    return <p>Libro no encontrado</p>;
  }

  // Utiliza la información del libro
  const { titulo, autor, descripcion, imagen, fecha_publicacion, origen } =
    libroSeleccionado;

  return (
    <>
      <Navbar />
      <div className="container_libroPage">
        <div className="grupo_libroPage">
          <img className="imagen_libroPage" src={imagen} alt={titulo} />
          <div className="container_texto_libroPage">
            <section className="section_libroPage">
              <header className="header_libroPage">
                <h1 className="titulo_libroPage">{titulo}</h1>
              </header>

              <article>
                <p className="texto_libroPage">
                  Autor: <span className="span_p_libroPage">{autor}</span>{" "}
                </p>
                <p className="texto_libroPage">
                  Descripción:{" "}
                  <span className="span_p_libroPage">{descripcion}</span>
                </p>
                <p className="texto_libroPage">
                  Fecha:{" "}
                  <span className="span_p_libroPage">{fecha_publicacion}</span>
                </p>
                <p className="texto_libroPage">
                  origen: <span className="span_p_libroPage">{origen}</span>
                </p>
              </article>
            </section>
          </div>
        </div>

        {/* Agrega más elementos según tus necesidades */}
      </div>
    </>
  );
};

export default LibroPage;
