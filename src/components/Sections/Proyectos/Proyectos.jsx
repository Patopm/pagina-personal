import "./Proyectos.css";
import Card from "../../Elements/Card/Card";

function Proyectos() {
  const cardInfo = {
    title: "Compas app",
    details: [
      "Red social enfocada a los músicos emergentes que da solución a la falta de alcance de los músicos",
    ],
    descripcion:
      "En este proyecto me dedique a hacer una gran parte del backend con Java y Springboot además de crear las paginas de inicio de sesion y registro de usuario, se usaron validaciones en tiempo real y almacenamiento de datos tanto en local storage y bases de datos (mySQL y PostgreSQL)",
  };

  return (
    <>
      <section className="proyectos-container">
        <h2>Proyectos</h2>
        <Card
          title={cardInfo.title}
          details={cardInfo.details}
          description={cardInfo.descripcion}
        />
        <button>Ver más</button>
      </section>
    </>
  );
}

export default Proyectos;
