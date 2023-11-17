import { data } from "../service/data";
import { Link } from "react-router-dom";
export default function CardLibro() {
  return (
    <>
      <div className="container_card">
        <header className="header_card">
          <h3 className="titulo_cards">
            {""}Explora algunas de las fascinantes historias que aguardan en{" "}
            <span className="span_titulo_cards">WebBooks:</span>
          </h3>
          <br />
        </header>
        <div className="card_imagen_libro">
          {data.libros.map((book) => (
            <div className="cardlibro" key={book.id}>
              <Link to={`/libro/${book.slug}`} className="enlace_libro">
                <ul className="ul_card_libro">
                  <img
                    className="imagen_libro"
                    src={book.imagen}
                    alt={book.titulo}
                  />
                  <div className="container_icons_card">
                    <Link
                      to={`/libro/${book.slug}`}
                      className="enlace_libro btn_VerMas"
                    >
                      Ver Más
                    </Link>
                  </div>
                </ul>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
