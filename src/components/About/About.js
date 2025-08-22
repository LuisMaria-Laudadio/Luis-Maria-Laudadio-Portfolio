import React from "react";
import s from "./About.module.css";
import useReveal from "../../hooks/useReveal";

export default function About() {
  // Activa el reveal para los paneles con clase .reveal (clase global)
  useReveal(".reveal");

  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <h2 className="h2">Quien soy ?</h2>
        <div className={s.aboutGrid}>
          {/* Panel: Avatar */}
          <div className={`glass ${s.panel} reveal`} style={{ transitionDelay: "60ms" }}>
            <div className={s.avatarWrap}>
              {/* Colocá tu foto en public/profile.jpg o cambia la ruta */}
              <img src="/profile.jpg" alt="Foto de perfil" className={s.avatar} />
              <div className={s.avatarGlow} />
            </div>
          </div>

          {/* Panel: Texto */}
          <div className={`glass ${s.panel} reveal`} style={{ transitionDelay: "120ms" }}>
            <h3 className="h3">Hola, soy Luis</h3>
            <p className="muted">
              Me especializo en React y en construir productos con una base sólida de componentes,
              performance y una estética consistente. Disfruto el detalle visual y la micro-interacción.
            </p>
            <ul className={s.list}>
              <li>Stack: React, JavaScript/TypeScript, CSS moderno.</li>
              <li>Foco: Accesibilidad, responsive, UX y performance.</li>
              <li>Trabajo: Colaboración, comunicación y entrega constante.</li>
            </ul>

            <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="/cv-luis-laudadio.pdf" download="Luis-Laudadio-CV.pdf">
                Descargar CV
              </a>
              <button className="btn" onClick={() => {
                const el = document.getElementById("proyectos");
                if (!el) return;
                const HEADER_OFFSET = 88;
                const rect = el.getBoundingClientRect();
                const top = Math.max(window.pageYOffset + rect.top - HEADER_OFFSET, 0);
                window.scrollTo({ top, behavior: "smooth" });
              }}>
                Ver proyectos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
