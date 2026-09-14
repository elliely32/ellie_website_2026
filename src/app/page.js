"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import HomeCarousel from "./components/HomeCarousel.jsx";
import WorkGallery from "./components/WorkGallery.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";

export default function Home() {
  useEffect(() => {
    const id = sessionStorage.getItem("scrollTarget");
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "auto" });
      sessionStorage.removeItem("scrollTarget");
    }
  }, []);

  return (
    <div className={styles.page}>
      <HomeCarousel />
      <WorkGallery />
      <AboutSection />
      <ContactSection />
      <h4>© Copyright 2026 Ellie Ly</h4>
    </div>
  );
}
