import "./Contacto.css";

function mostrarDatos() {
  const datos = document.querySelector(".contact-info");
  datos.style.display = "flex";
}
function Contacto() {
  return (
    <>
      <section className="contact-container">
        <h2>¡Contactame!</h2>
        <h4>No te pierdas la oportunidad de conocerme!</h4>
        <p>
          Envíame un mensaje a tu método de contacto favorito o visita mis redes
          sosciales
        </p>
        <div className="contact-btn">
          <button onClick={mostrarDatos}>Mandame un mensaje</button>
          <button onClick={mostrarDatos}>Enviame un correo</button>
          <button onClick={mostrarDatos}>Visita mi github</button>
          <button onClick={mostrarDatos}>Visita mi linkedin</button>
        </div>
        <div className="contact-info" id="info">
          <label>
            Si no funcionan los botones puedes copiar la información aquí
          </label>
          <div className="contact-links">
            <a href="">4427167741</a>
            <a href="">patriciog.pina@gmail.com</a>
            <a href="">Github icon</a>
            <a href="">Linkedin icon</a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contacto;
