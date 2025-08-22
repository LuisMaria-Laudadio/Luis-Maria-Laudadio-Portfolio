import React from "react";
import styles from "./Technologies.module.css";

const techLogos = [
  { src: "/logos/html.png", alt: "HTML" },
  { src: "/logos/css.png", alt: "CSS" },
  { src: "/logos/javascript.png", alt: "JavaScript" },
  { src: "/logos/react.png", alt: "React" },
  { src: "/logos/nodejs.png", alt: "Nodejs" },
  { src: "/logos/git.png", alt: "Git" },
  { src: "/logos/github.png", alt: "GitHub" }
];

const Technologies = () => {
  return (
    <section id="tecnologias" className={styles.technologies}>
      <h2 className="h2">Tecnologías</h2>

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
    </section>
  );
};

export default Technologies;
