import { Link } from "react-router-dom";
import IconoWeb from "../assets/img/bookimage.png";
export default function Navbar() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.35, // Ajusta el factor multiplicador según tus necesidades
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="header_menu">
        <nav className="nav_menu_titulo">
          <Link to="/">
            {" "}
            <img
              width={72}
              height={80}
              src={IconoWeb}
              alt="un libro con un corazon, cuando lo presionas te devuelve al inicio de la pagina"
            />
          </Link>

          <h2 className="titulo_web">
            <Link className="btn_titulo_web">WebBooks</Link>
          </h2>
        </nav>
      </header>

      <header className="subheader_menu">
        <nav className="subnavbar_menu">
          <ul>
            <Link className="btn_menu subButton_menu" to="/">
              Inicio
            </Link>
            <Link className="btn_menu subButton_menu" onClick={scrollDown}>
              Libros
            </Link>
            <Link className="btn_menu subButton_menu" to="/acerca">
              Acerca
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
