import React from "react";

export default function ContactCard({ href, label, sub, icon }) {
  return (
    <a className="contact glass" href={href} target="_blank" rel="noreferrer">
      <div className="icon">{icon}</div>
      <div>
        <div className="contact-label">{label}</div>
        <div className="contact-sub">{sub}</div>
      </div>
      <div className="arrow">↗</div>
    </a>
  );
}
