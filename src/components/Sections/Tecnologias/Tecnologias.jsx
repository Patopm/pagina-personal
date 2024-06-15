import "./Tecnologias.css";
import Chips from "../../Elements/Chips/Chips.jsx";

import {
  FaReact,
  FaPython,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaGitAlt,
  FaBootstrap,
  FaAngular,
  FaNode,
  FaSass,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiSpringsecurity,
  SiTailwindcss,
  SiTypescript,
  SiCsharp,
  SiDjango,
  SiJsonwebtokens,
  SiSwagger,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { AiOutlineDotNet } from "react-icons/ai";

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
  });
  console.log("test");
}

function Tecnologias() {
  const tecnologiasDominadas = [
    { nombre: "Javascript", icon: FaJsSquare },
    { nombre: "React", icon: FaReact },
    { nombre: "Java", icon: FaJava },
    { nombre: "Spring Boot", icon: SiSpringboot },
    { nombre: "HTML", icon: FaHtml5 },
    { nombre: "CSS", icon: FaCss3 },
    { nombre: "Github", icon: FaGithub },
    { nombre: "Git", icon: FaGitAlt },
    { nombre: "Bootstrap", icon: FaBootstrap },
  ];

  const tecnologiasProceso = [
    { nombre: "Angular", icon: FaAngular },
    { nombre: "Spring Security", icon: SiSpringsecurity },
    { nombre: "Tailwind CSS", icon: SiTailwindcss },
    { nombre: "TypeScript", icon: SiTypescript },
    { nombre: "Python", icon: FaPython },
    { nombre: "SQL", icon: TbSql },
    { nombre: "Node.js", icon: FaNode },
  ];

  const tecnologiasAprender = [
    { nombre: "C#", icon: SiCsharp },
    { nombre: ".Net", icon: AiOutlineDotNet },
    { nombre: "DJango", icon: SiDjango },
    { nombre: "JWT", icon: SiJsonwebtokens },
    { nombre: "SASS", icon: FaSass },
    { nombre: "Swagger", icon: SiSwagger },
  ];

  return (
    <>
      <section className="tecnologias-container">
        <h2>Mis conocimientos</h2>
        <h3>Tecnologias Dominadas</h3>
        <div className="scroller">
          <ul className="tecnologias-dominadas inner_scroller">
            {tecnologiasDominadas.map((tecnologia, index) => (
              <Chips
                key={index}
                Icon={tecnologia?.icon}
                nombre={tecnologia.nombre}
              />
            ))}
            {tecnologiasDominadas.map((tecnologia, index) => (
              <Chips
                key={index}
                Icon={tecnologia?.icon}
                nombre={tecnologia.nombre}
              />
            ))}
          </ul>
        </div>
        <h3>Tecnologias en proceso de aprendizaje</h3>
        <div className="scroller" data-direction="right">
          <ul className="tecnologias-proceso inner_scroller">
            {tecnologiasProceso.map((tecnologia, index) => (
              <Chips
                key={index}
                Icon={tecnologia?.icon}
                nombre={tecnologia.nombre}
              />
            ))}
            {tecnologiasProceso.map((tecnologia, index) => (
              <Chips
                key={index}
                Icon={tecnologia?.icon}
                nombre={tecnologia.nombre}
              />
            ))}
          </ul>
        </div>
        <h3>Tecnologias que deseo aprender</h3>
        <div className="scroller">
          <ul className="tecnologias-aprender inner_scroller">
            {tecnologiasAprender.map((tecnologia, index) => (
              <Chips
                key={index}
                Icon={tecnologia?.icon}
                nombre={tecnologia.nombre}
              />
            ))}
            {tecnologiasAprender.map((tecnologia, index) => (
              <Chips
                key={index}
                Icon={tecnologia?.icon}
                nombre={tecnologia.nombre}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
export default Tecnologias;
