import React, { useEffect } from "react";
import s from "./Navbar.module.css";

const SECTIONS = [
  { id: "sobre-mi",    label: "Sobre mí" },
  { id: "proyectos",   label: "Proyectos" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "habilidades", label: "Habilidades" },
  { id: "contacto",    label: "Contacto" },
];

export default function Navbar({ active: activeProp, scrollTo, menuOpen, setMenuOpen }) {
  // cerrar menú si agrandan la pantalla
  useEffect(() => {
    const onResize = () => setMenuOpen?.(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [setMenuOpen]);

  const handleClick = (e, id) => {
    if (typeof scrollTo === "function") {
      e.preventDefault();
      scrollTo(id);
    }
  };

  return (
    <header className={s.navWrap}>
      <nav className={`glass ${s.nav}`}>
        {/* Marca */}
        <a
          href="#sobre-mi"
          className={s.brand}
          onClick={(e) => handleClick(e, "sobre-mi")}
          aria-label="Ir a inicio"
        >
          <span className={s.brandFull}>Luis María Laudadio</span>
          <span className={s.brandShort}>LML</span>
        </a>

        {/* Hamburguesa (mobile) */}
        <button
          className={s.hamb}
          onClick={() => setMenuOpen?.((v) => !v)}
          aria-expanded={!!menuOpen}
          aria-controls="nav-links"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span /><span /><span />
        </button>

        {/* Links: derecha en desktop / acordeón en mobile */}
        <div id="nav-links" className={`${s.linksWrap} ${menuOpen ? s.open : ""}`}>
          <div className={s.links}>
            {SECTIONS.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                className={activeProp === it.id ? s.active : ""}
                onClick={(e) => handleClick(e, it.id)}
                aria-current={activeProp === it.id ? "page" : undefined}
              >
                {it.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
