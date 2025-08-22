import { useEffect } from "react";

/**
 * useReveal
 * - Modo CSS Modules: useReveal({ revealClass: styles.reveal, visibleClass: styles["is-visible"] })
 * - Modo global/legacy: useReveal(".reveal", { visibleClass: "in" })
 *
 * Opciones:
 *  - rootMargin: margen del viewport (default pensado para header fijo)
 *  - threshold: umbral de visibilidad (0..1)
 *  - once: si true, deja visible y desobserva; si false, quita/añade según visibilidad
 */
export default function useReveal(input, options = {}) {
  useEffect(() => {
    const {
      root = null,
      rootMargin = "0px 0px -10% 0px",
      threshold = 0.15,
      once = true,
      // Para modo legacy por selector (si te sirve)
      visibleClass: legacyVisible = "in",
    } = options;

    let selector = "";
    let revealClass = "";
    let visibleClass = "";

    if (typeof input === "string") {
      // Modo legacy: input es un selector, p.ej. ".reveal"
      selector = input;
      visibleClass = legacyVisible;
    } else if (input && typeof input === "object") {
      // Modo CSS Modules: pasás las classNames ya hasheadas
      // input.revealClass -> styles.reveal (sin punto)
      // input.visibleClass -> styles["is-visible"] (sin punto)
      revealClass = input.revealClass || "";
      visibleClass = input.visibleClass || "";
      // armamos selector por clase hasheada
      if (revealClass) {
        selector = `.${revealClass.split(" ").join(".")}`;
      }
    }

    if (!selector) return;

    const elements = Array.from(document.querySelectorAll(selector));
    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            if (visibleClass) el.classList.add(visibleClass);
            if (once) io.unobserve(el);
          } else if (!once) {
            if (visibleClass) el.classList.remove(visibleClass);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    elements.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [input, options]);
}
