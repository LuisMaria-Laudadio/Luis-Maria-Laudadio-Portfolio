import projects from "../../data/projects";
import useReveal from "../../hooks/useReveal";
import styles from "./Projects.module.css";

export default function Projects() {
useReveal({ revealClass: styles.reveal, visibleClass: styles["is-visible"] }, { once: false });


  return (
    <section id="proyectos" className="section">
      <div className="container">
        <h2 className="h2">Proyectos</h2>
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <article
              key={i}
              className={`${styles.card} ${styles.glass} ${styles.reveal}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={styles.cardHead}>
                <h3 className="h3">{p.title}</h3>
                {p.link && (
                  <a className={styles.link} href={p.link} target="_blank" rel="noreferrer">
                    Ver ↗
                  </a>
                )}
              </div>
              {p.description && <p className="muted">{p.description}</p>}
              {Array.isArray(p.tags) && p.tags.length > 0 && (
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
