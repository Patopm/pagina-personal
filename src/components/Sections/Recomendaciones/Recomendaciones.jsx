import "./Recomendaciones.css";

function Recomendaciones() {
  return (
    <>
      <section className="recomendaciones-container">
        <h2>Lo que la gente piensa de mí</h2>
        <div className="recomendaciones-carrusel">
          <div className="carrusel-item">
            <h3>Nombre</h3>
            <label>de donde proviene</label>
            <p>Recomencacion</p>
            <a href="">link directo a la recomendacion</a>
          </div>
        </div>
        <button>Visita mi linkedin</button>
      </section>
    </>
  );
}
export default Recomendaciones;
