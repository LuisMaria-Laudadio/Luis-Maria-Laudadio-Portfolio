import React from "react";
import styles from "./Technologies.module.css";

// IMPORTA TU GRID (ajusta la ruta si difiere en tu árbol)
import TechGrid from "../TechGrid/TechGrid";
import "../TechGrid/tech.css";

// Datos del carrusel actuales (se mantienen)
const techLogos = [
  { src: "/logos/html.png", alt: "HTML" },
  { src: "/logos/css.png", alt: "CSS" },
  { src: "/logos/javascript.png", alt: "JavaScript" },
  { src: "/logos/react.png", alt: "React" },
  { src: "/logos/nodejs.png", alt: "Nodejs" },
  { src: "/logos/git.png", alt: "Git" },
  { src: "/logos/github.png", alt: "GitHub" },
  { src: "/logos/enigma.png", alt: "Enigma" }
];

// Mapeo para el GRID (usamos los mismos logos + “futuros/ocultos”)
const TECHS = [
  { id: "html",      name: "HTML",       img: "/logos/html.png",       status: "mastered" },
  { id: "css",       name: "CSS",        img: "/logos/css.png",        status: "mastered" },
  { id: "js",        name: "JavaScript", img: "/logos/javascript.png", status: "mastered" },
  { id: "react",     name: "React",      img: "/logos/react.png",      status: "mastered" },
  { id: "node",      name: "Node.js",    img: "/logos/nodejs.png",     status: "locked"   },
  { id: "git",       name: "Git",        img: "/logos/git.png",        status: "mastered" },
  { id: "github",    name: "GitHub",     img: "/logos/github.png",     status: "mastered" },

  { id: "future1", name: "Enigma", img: "/logos/enigma.png", status: "secret" },
  { id: "future2", name: "Enigma", img: "/logos/enigma.png", status: "secret" },
  { id: "future3", name: "Enigma", img: "/logos/enigma.png", status: "secret" },

];

const Technologies = () => {
  return (
    <section id="tecnologias" className={styles.technologies}>
      <h2 className="h2">Tecnologías</h2>

      {/* GRID solo en MOBILE */}
      <div className={styles.onlyMobile}>
        <TechGrid items={TECHS} />
      </div>

      {/* Carrusel en TABLET/ESCRITORIO */}
      <div className={styles.hideMobile}>
        <div className={styles.carousel}>
          <div className={styles.track}>
            {techLogos.concat(techLogos).map((tech, index) => (
              <div key={index} className={styles.slide}>
                <img src={tech.src} alt={tech.alt} />
              </div>
            ))}
          </div>
          <div className={`${styles.fade} ${styles.left}`} />
          <div className={`${styles.fade} ${styles.right}`} />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
