import Navbar from "../components/Navbar";
export default function AcercaPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container_acerca">
        <section className="section_acerca">
          <h1 className="titulo_acerca">Pensamientos</h1>
          <article>
            <p className="p_acerca">
              Como tengo poco tiempo y estoy ocupado, la página estará sin
              adaptarse para todos los dispositivos. También me gustaría mejorar
              algunas cosas, como el diseño y, en general, casi todo. Aún falta
              pulir bastante la página, pero por ahora así estará.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
