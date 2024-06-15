import "./App.css";
import Navbar from "./components/Sections/Navbar/Navbar";
import SobreMi from "./components/Sections/SobreMi/SobreMi";
import Contacto from "./components/Sections/Contacto/Contacto";
import Experiencia from "./components/Sections/Experiencia/Experiencia";
import Proyectos from "./components/Sections/Proyectos/Proyectos";
import Tecnologias from "./components/Sections/Tecnologias/Tecnologias";
import Educacion from "./components/Sections/Educación/Educacion";
// import Recomendaciones from "./components/Sections/Recomendaciones/Recomendaciones";

function App() {
  return (
    <>
      <Navbar />
      <SobreMi />
      <Contacto />
      <Experiencia />
      <Proyectos />
      <Tecnologias />
      <Educacion />
      {/* <Recomendaciones /> */}
    </>
  );
}

export default App;
