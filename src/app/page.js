"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import HomeCarousel from "./components/homeCarousel";
import WorkGallery from "./components/workGallery";
import AboutSection from "./components/aboutSection";
import ContactSection from "./components/contactSection";

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
    </div>
  );
}
