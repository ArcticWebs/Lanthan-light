import styles from "./About.module.scss";
import clsx from "clsx";
import Button from "components/Button/Button";

const About = () => {
  return (
    <div className={styles.bcgSection}>
      <p className={clsx("container", styles.heroTxt)}>
        PONAD 15 LAT DOŚWIADCZENIA W ELEKTRONICE.
      </p>
      <p>
        Seba jest super wszystko umie, pracował w MLC Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Milion lat doświadczenia robi swoje!
      </p>
      <Button name={"KONTAKT"} />

      <div className={styles.cover}></div>
    </div>
  );
};

export default About;
