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
             Soy Luis, Desarrollador Frontend con más de 2 años creando productos y enseñando programación en Kodland (EdTech internacional) y 1 año de trabajo freelance. Me especializo en React, JavaScript y CSS moderno, priorizando accesibilidad, performance y UX. Disfruto del detalle visual y las micro-interacciones que hacen que una web se sienta viva. Actualmente estoy estudiando Python y sus librerias para adentrarme en el Análisis de datos para en un futuro hacer machine learning y trabajar con la IA.  
            </p>
            <ul className={s.list}>
              <li>Stack: React, JavaScript, HTML, CSS, Git/GitHub, Vercel y Librerias varias.</li>
              <li>Enfoque: Accesibilidad (WCAG), responsive desde mobile-first y performance medible.</li>
              <li>Experiencia: +2 años Kodland — clases en vivo, proyectos guiados.</li>
              <li>Freelance: landings, e-commerce, blogs, weather app entre otros</li>
              <li>Trabajo: comunicación clara, colaboración y entregas iterativas orientadas a negocio.</li>
            </ul>

            <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="/cv/Luis_Maria_Laudadio_CV_ES.pdf" download="Luis_Maria_Laudadio_CV_ES.pdf">
                Descargar CV (ESP)
              </a>
              <a className="btn btn-primary" href="/cv/Luis_Maria_Laudadio_CV_EN.pdf" download="Luis_Maria_Laudadio_CV_EN.pdf">
                Download CV (ENG)
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
