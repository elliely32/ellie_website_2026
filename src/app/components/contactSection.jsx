"use client";

import Image from "next/image";
import styles from "./contactSection.module.css";

const ContactSection = () => {
  const sendEmail = () => {
    window.location = "mailto:elliel.4797@gmail.com";
  };
  return (
    <div className={styles.contactContainer} id="contact">
      <Image
        src="/portfolioAssets/contactImage.webp"
        alt="Doodle of Ellie running with a letter"
        width={0}
        height={0}
        sizes="100vw"
        className={styles.contactImage}
        priority
      />
      <div className={styles.contactDescriptionContainer}>
        <h1 className={styles.contactHeader}>LET'S GET IN TOUCH!</h1>
        You can find me and my work online at a bunch of places!
        <div className={styles.socialMediaLinks}>
          <a href="https://www.instagram.com/sketchie32" target="_blank">
            <Image
              src="/portfolioAssets/icons/instagram.webp"
              alt="Instagram logo"
              width={80}
              height={80}
              sizes="100vw"
              priority
            />
          </a>
          <a href="https://github.com/elliely32" target="_blank">
            <Image
              src="/portfolioAssets/icons/github.webp"
              alt="Instagram logo"
              width={80}
              height={80}
              sizes="100vw"
              priority
            />
          </a>
          <a href="https://www.youtube.com/@sketchie32" target="_blank">
            <Image
              src="/portfolioAssets/icons/youtube.webp"
              alt="Instagram logo"
              width={80}
              height={80}
              sizes="100vw"
              priority
            />
          </a>
        </div>
        You can also send me an email!
        <button onClick={sendEmail} className={styles.emailButton}>
          {" "}
          Send It!
        </button>
      </div>
    </div>
  );
};
export default ContactSection;
