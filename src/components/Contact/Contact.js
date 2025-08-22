// src/components/Contact/Contact.js
import React, { useState } from "react";
import s from "./Contact.module.css";

/**
 * Carta individual (naipes)
 * - Hover: se da vuelta (CSS)
 * - Mobile / Touch: click/tap alterna estado "flipped"
 */
const GameContactCard = ({ title, info, href, iconSrc, download }) => {
  const [flipped, setFlipped] = useState(false);

  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((v) => !v);
    }
  };

  return (
    <div
      className={`${s.gameCard} ${flipped ? s.flipped : ""}`}
      tabIndex={0}
      role="button"
      aria-label={`${title}: ${info}. ${flipped ? "Frente" : "Dorso"}. Presiona Enter para girar.`}
      onClick={() => setFlipped((v) => !v)}
      onKeyDown={onKey}
    >
      <div className={s.gameInner}>
        {/* Frente con el logo */}
        <div className={`${s.face} ${s.front}`}>
          <div className={s.logoWrap}>
            <img src={iconSrc} alt={title} className={s.logoImg} />
          </div>
        </div>

        {/* Dorso con info y link */}
        <div className={`${s.face} ${s.back}`}>
          <div className={s.backWrap}>
            <h3 className={s.backTitle}>{title}</h3>
            {info && <p className={s.backInfo}>{info}</p>}

            {href && (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={s.btnLink}
                {...(download ? { download } : {})}
              >
                {download ? "Descargar" : "Ir"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="container">
        <h2 className="h2">Contacto</h2>

        <div className={s.gameGrid}>
          <GameContactCard
            title="GitHub"
            info="@Luis Maria Laudadio"
            href="https://github.com/LuisMaria-Laudadio"
            iconSrc="/logos/github.png"
          />
          <GameContactCard
            title="LinkedIn"
            info="Luis Maria Laudadio"
            href="https://www.linkedin.com/in/luis-maria-laudadio-78a868285/"
            iconSrc="/logos/linkedin.png"
          />
          <GameContactCard
            title="Email"
            info="Personal Mail"
            href="mailto:luismarialaudadio@gmail.com"
            iconSrc="/logos/gmail.png"
          />
          <GameContactCard
            title="WhatsApp"
            info="+54 9 11 1234-5678"
            href="https://wa.me/542612072423" /* sin espacios ni símbolos */
            iconSrc="/logos/whatsapp.png"
          />

        </div>
      </div>
    </section>
  );
}
