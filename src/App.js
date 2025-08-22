import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SoftSkills from "./components/SoftSkills/SoftSkills";
import "./App.css";

export default function App() {
  const roles = useMemo(() => ["Luis Maria Laudadio", "Desarrollador Front End"], []);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Efecto de tipeo
  useEffect(() => {
    const current = roles[roleIndex];
    let t;
    if (!isDeleting && displayText.length < current.length) {
      t = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 70);
    } else if (!isDeleting && displayText.length === current.length) {
      t = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayText.length > 0) {
      t = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [displayText, isDeleting, roleIndex, roles]);

  // Detectar sección activa al scrollear (para el subrayado del navbar)
  useEffect(() => {
    const ids = ["proyectos", "sobre-mi", "tecnologias", "habilidades", "contacto"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-25% 0px -60% 0px", threshold: 0.1 }
    );

    sections.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Scroll suave con offset usando scroll-margin-top (+ actualiza active)
  const scrollTo = (id) => {
    setMenuOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    // encuentra header (CSS Modules-safe)
    const header =
      document.querySelector('header[class*="navWrap"]') ||
      document.querySelector(".navWrap") ||
      document.querySelector("header");

    const offset = header ? header.getBoundingClientRect().height + 8 : 80;

    // asegura margen de anclaje (no visible; sólo posicionamiento)
    if (!el.style.scrollMarginTop) el.style.scrollMarginTop = `${offset}px`;

    // ✅ mover active de inmediato
    setActive(id);

    // scroll suave nativo
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app">
      <div className="bg">
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="blob blob3" />
        <div className="noise" />
      </div>

      <Navbar
        active={active}
        scrollTo={scrollTo}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* offset para que el contenido no quede tapado por el navbar */}
      <div className="mainWrap">
        <Hero displayText={displayText} scrollTo={scrollTo} />
        <About />
        <Projects />
        <Technologies />
        <SoftSkills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
