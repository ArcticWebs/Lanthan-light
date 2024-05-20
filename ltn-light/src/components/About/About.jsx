import styles from "./About.module.scss";
import clsx from "clsx";

const About = () => {
  return (
    <div className={clsx("container", styles.sectionBox)}>
      <h3>
        <span className="boldTxt">Lanthan electronics</span> to firma, której
        korzenie sięgają ponad 15 lat doświadczenia w dziedzinie serwisu
        elektroniki. Nasza pasja do elektroniki jest niewątpliwie widoczna w
        każdym projekcie i naprawie, którą wykonujemy.
      </h3>
    </div>
  );
};

export default About;
