import "./Educacion.css";
import Card from "../../Elements/Card/Card.jsx";

function Educacion() {
  const generation = {
    title: "Java Fullstack Developer",
    details: ["Generation Mexico", "Marzo 2024 - Mayo 2024"],
    description: "Descripcion",
  };

  const tripleTen = {
    title: "Data Scientist",
    details: ["Generation Mexico", "Marzo 2024 - En curso"],
    description: "Descripcion",
  };

  const tecmi = {
    title: "Preparatoria",
    details: ["Tecmilenio", "Agosto 2020 - Junio 2023"],
    description: "Descripcion",
  };

  return (
    <>
      <section className="educacion-container">
        <h2>Educación</h2>
        <h3>Bootcamps</h3>
        <div className="bootcamp-cards-container">
          <Card
            title={generation.title}
            details={generation.details}
            description={generation.description}
          />
          <Card
            title={tripleTen.title}
            details={tripleTen.details}
            description={tripleTen.description}
          />
        </div>
        <h3>Escuelas</h3>
        <div className="escuelas-cards-container">
          <Card
            title={tecmi.title}
            details={tecmi.details}
            description={tecmi.description}
          />
        </div>
        <h3>Educación Continua</h3>
        <p>
          En mi trayectoria profesional, el aprendizaje continuo y la
          proactividad han sido fundamentales para mi desarrollo. Me mantengo
          constantemente actualizado con las últimas tecnologías y tendencias
          del sector, buscando siempre mejorar y adquirir nuevos conocimientos.
          Además, tomo la iniciativa en proyectos, identificando oportunidades
          de mejora y proponiendo soluciones efectivas que optimizan los
          resultados. Este enfoque proactivo me permite adaptarme rápidamente a
          cambios y desafíos, asegurando un rendimiento excepcional en cada
          tarea que emprendo.
        </p>
      </section>
    </>
  );
}

export default Educacion;
