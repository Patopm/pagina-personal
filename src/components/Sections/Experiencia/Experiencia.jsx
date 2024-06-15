import "./Experiencia.css";
import Card from "../../Elements/Card/Card";

function Experiencia() {
  const cardInfo = {
    title: "Desarrollador Fullstack Junior",
    details: ["Compas app", "Marzo 2024 - Presente"],
    description:
      "Colaboré en el desarrollo de una red social enfocada a los músicos emergentes que da solución a la falta de alcance de los músicos,para conectar con otros músicos y personas interesadas en losservicios",
  };

  return (
    <>
      <section className="experiencia-container">
        <h2>Experiencia</h2>
        <div className="experiencia-cards-container">
          <Card
            title={cardInfo.title}
            details={cardInfo.details}
            description={cardInfo.description}
          />
        </div>
        <button>Ver todo</button>
      </section>
    </>
  );
}
export default Experiencia;
