import Image from "next/image";
import styles from "./aboutSection.module.css";

const AboutSection = () => {
  return (
    <div className={styles.aboutContainer} id="about">
      <div className={styles.aboutDescriptionContainer}>
        <h1 className={styles.aboutHeader}>A LITTLE ABOUT ME</h1>
        <p className={styles.aboutContent}>
          I'm an illustrator, web developer, and storyteller based in NYC. I
          love reading about fantastical adventures, thinking about
          sustainability, listening to math rock, and being a little extra✨.
          <br />
          <br />
          I work with many different media but I'm particularly interested in
          exploring ways technology and art can work in tandem to tell stories.
          My current focus is on video game development.
          <br />
          <br />
        </p>
      </div>
      <Image
        src="/portfolioAssets/aboutPhoto.webp"
        alt="Ellie's Portfolio logo"
        width={0}
        height={0}
        sizes="100vw"
        className={styles.aboutImage}
        priority
      />
    </div>
  );
};
export default AboutSection;
