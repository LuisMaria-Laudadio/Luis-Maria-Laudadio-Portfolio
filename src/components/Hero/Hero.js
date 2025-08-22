import React from "react";
import s from "./Hero.module.css"; // ⬅️ importa el módulo

export default function Hero({ displayText, scrollTo }) {
  return (
    <section id="home" className={`section hero ${s.hero}`}>
      <div className="container center">
        <p className="chip">
          <span className="dot" />
          Disponible para proyectos
        </p>

        <h1 className="title caret">
          <span className={s.titleFixed}>{displayText}</span>
          {/* Ghost: solo reserva espacio, NO se ve */}
          <span className={s.ghost} aria-hidden="true">
            Desarrollador Front End
          </span>
        </h1>

        <p className="lead">
          Construyo experiencias web rápidas, accesibles y mantenibles. Acá vas
          a encontrar mis trabajos, mi stack y formas de contacto.
        </p>

        <div className="cta">
          <button type="button" className="btn btn-primary" onClick={() => scrollTo("proyectos")}>
            Ver proyectos
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => scrollTo("contacto")}>
            Contacto
          </button>
        </div>

        <div className="down" aria-hidden="true">▼</div>
      </div>
    </section>
  );
}
