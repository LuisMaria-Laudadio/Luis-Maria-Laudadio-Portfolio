import React, { useState } from "react";
import "./tech.css";

export default function TechGrid({ items = [] }) {
  const [inspecting, setInspecting] = useState(null);

  const handleInspect = (id) => {
    setInspecting(id);
    // Debe coincidir con la duración de la animación CSS (600ms)
    setTimeout(() => setInspecting(null), 600);
  };

  return (
    <div className="tech-grid" role="list">
      {items.map((t) => {
        const isInspecting = inspecting === t.id;
        return (
          <button
            key={t.id}
            className={
              `tech-card tech--${t.status}` + (isInspecting ? " is-inspecting" : "")
            }
            aria-label={`${t.name || "Secreto"} • ${statusLabel(t.status)}`}
            title={`${t.name || "Secreto"} • ${statusLabel(t.status)}`}
            onClick={() => handleInspect(t.id)}
          >
            {/* SECRET: solo mostrás la imagen que definas en items (candado, ?) */}
            <img
              className="tech-logo"
              src={t.img}
              alt={t.status === "secret" ? "Próximamente" : t.name}
              loading="lazy"
            />

            {/* Ocultar nombre si es secret */}
            {t.status !== "secret" && <span className="tech-name">{t.name}</span>}

            {/* Mensaje contextual (aparece en hover/focus/inspección) */}
            <span className="tech-overlay" aria-hidden="true">
              {overlayText(t.status)}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function statusLabel(s) {
  if (s === "mastered") return "desbloqueada";
  if (s === "locked") return "en progreso";
  if (s === "secret") return "próximamente";
  return "";
}
function overlayText(s) {
  if (s === "mastered") return "Desbloqueada";
  if (s === "locked") return "En progreso";
  if (s === "secret") return "Próximamente";
  return "";
}
