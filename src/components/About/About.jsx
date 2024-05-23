import styles from "./About.module.scss";
import clsx from "clsx";

const About = () => {
  return (
    <div className={styles.bcgSection}>
      <div className={clsx("container", styles.sectionBox)}>
        <p className={styles.heroTxt}>
          PONAD 15 LAT DOŚWIADCZENIA W ELEKTRONICE.
        </p>
        <p className={styles.aboutSpecialist}>
          Seba jest super wszystko umie, pracował w MLC
        </p>
        <p className={styles.aboutSpecialist}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className={styles.aboutSpecialist}>
          Milion lat doświadczenia robi swoje!
        </p>
      </div>
      <div className={styles.cover}></div>
    </div>
  );
};

export default About;
