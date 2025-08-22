import React from "react";
import styles from "./SoftSkills.module.css";

const skills = [
  {
    emoji: "🤝",
    title: "Trabajo en equipo",
    level: "Avanzado",
    badge: "badgeAdv",
    percent: 90,
  },
  {
    emoji: "💡",
    title: "Creatividad",
    level: "Avanzado",
    badge: "badgeAdv",
    percent: 85,
  },
  {
    emoji: "🕒",
    title: "Gestión del tiempo",
    level: "Intermedio",
    badge: "badgeMid",
    percent: 70,
  },
  {
    emoji: "🗣️",
    title: "Comunicación",
    level: "Avanzado",
    badge: "badgeAdv",
    percent: 88,
  },
  {
    emoji: "⚡",
    title: "Problem Solving",
    level: "Avanzado",
    badge: "badgeAdv",
    percent: 80,
  },
  {
    emoji: "📚",
    title: "Aprendizaje continuo",
    level: "Básico",
    badge: "badgeBase",
    percent: 60,
  },
];

const SoftSkills = () => {
  return (
    <section id="habilidades" className={styles.softskills}>
      <h2 className="h2">Habilidades blandas</h2>

      <div className={styles.softGrid}>
        {skills.map((skill, i) => (
          <div key={i} className={styles.softCard}>
            <div className={styles.softHead}>
              <div className={styles.softTitle}>
                <span className={styles.softEmoji}>{skill.emoji}</span>
                <h3>{skill.title}</h3>
              </div>
              <span className={`${styles.badge} ${styles[skill.badge]}`}>
                {skill.level}
              </span>
            </div>
            <div className={styles.skillMeter}>
              <div
                className={styles.skillFill}
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;
