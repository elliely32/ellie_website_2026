import Image from "next/image";
import styles from "./homeCarousel.module.css";

const HomeCarousel = () => {
  return (
    <>
      <div id="homeCarousel" className={styles.overlayContent}>
        <Image
          className={styles.logo}
          src="/portfolioAssets/logo.svg"
          alt="Ellie's Portfolio logo"
          width={300}
          height={200}
          unoptimized
        />
        <p className={styles.overlayText}>ARTIST | CODER | STORYTELLER</p>
      </div>
      <div className={styles.overlay} />
      <div className={styles.carouselContainer}>
        <div aria-hidden className={styles.carouselGroup}>
          <Image
            className={styles.carouselItem}
            src="/portfolioAssets/carouselAssets/extracurricularActivitiesComic.webp"
            alt="extracurricular activities comic"
            height={610}
            width={570}
          />
          <Image
            className={styles.carouselItem}
            src="/portfolioAssets/carouselAssets/treatOrTrick.webp"
            alt="excerpt from Treat or Trick Short"
            width={763}
            height={610}
            unoptimized
          />
          <Image
            className={styles.carouselItem}
            src="/portfolioAssets/carouselAssets/nurture.webp"
            alt="extracurricular activities comic"
            width={488}
            height={610}
          />
          <Image
            className={styles.carouselItem}
            src="/portfolioAssets/carouselAssets/takeABreak.webp"
            alt="extracurricular activities comic"
            width={488}
            height={610}
            unoptimized
          />
        </div>
        <div className={styles.carouselGroup}>
          <Image
            className={styles.carouselItem}
            src="/portfolioAssets/carouselAssets/extracurricularActivitiesComic.webp"
            alt="extracurricular activities comic"
            width={570}
            height={610}
          />
          <Image
            className={styles.carouselItem}
            src="/portfolioAssets/carouselAssets/treatOrTrick.webp"
            alt="excerpt from Treat or Trick Short"
            width={763}
            height={610}
            unoptimized
          />
          <Image
            className={styles.carouselItem}
            src="/portfolioAssets/carouselAssets/nurture.webp"
            alt="extracurricular activities comic"
            width={488}
            height={610}
          />
          <Image
            className={styles.carouselItem}
            src="/portfolioAssets/carouselAssets/takeABreak.webp"
            alt="extracurricular activities comic"
            width={480}
            height={610}
            unoptimized
          />
        </div>
      </div>
    </>
  );
};
export default HomeCarousel;
