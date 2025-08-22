import React, { useState } from "react";

export default function GameContactCard({
  icon,       // opcional: JSX (SVG)
  iconSrc,    // opcional: ruta PNG/SVG
  title,
  info,
  href,
  download = false,
  floatDelay = 0   // para escalonar la animación de flotación
}) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped(v => !v);
  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
  };

  return (
    <div
      className={`game-card playing ${flipped ? "is-flipped" : ""}`}
      role="button"
      tabIndex={0}
      aria-label={`${title} - girar`}
      onClick={toggle}
      onKeyDown={onKey}
      style={{ animationDelay: `${floatDelay}ms` }}   // flotación escalonada
    >
      <div className="game-inner">
        {/* FRONT */}
        <div className="game-face game-front">
          <div className="logo-wrap">
            {iconSrc ? <img className="logo-img" src={iconSrc} alt={title} /> : <div className="logo-svg">{icon}</div>}
          </div>
        </div>

        {/* BACK */}
        <div className="game-face game-back">
          <div className="game-back-wrap">
            <div className="game-back-title">{title}</div>
            {info && <div className="game-back-info">{info}</div>}
            {href && (
              <a
                className="btn btn-primary game-back-btn"
                href={href}
                target={download ? "_self" : "_blank"}
                rel={download ? undefined : "noreferrer"}
                download={download || undefined}
              >
                {download ? "Descargar" : "Abrir ↗"}
              </a>
            )}
            <div className="game-hint">Tocá/hover para dar vuelta</div>
          </div>
        </div>
      </div>
    </div>
  );
}
