import styles from "./About.module.scss";
import clsx from "clsx";

const About = () => {
  return (
    <div className={styles.bcgSection}>
      <div className={clsx("container", styles.sectionBox)}>
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          className={styles.heroTxt}
        >
          PONAD <span className={styles.ctaTxt}>15 LAT DOŚWIADCZENIA</span> W
          SERWISIE ELEKTRONIKI.
        </p>
        <div
          className={styles.specialistDescription}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <p className={styles.aboutSpecialist}>
            Seba jest super wszystko umie, pracował w MLC
          </p>
          <p className={styles.aboutSpecialist}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className={styles.aboutSpecialist}>
            Zobacz relacje z naszych napraw na Facebooku!
          </p>
        </div>
      </div>
      <div className={styles.cover}></div>
    </div>
  );
};

export default About;
