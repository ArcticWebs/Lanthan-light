import Button from "components/Button/Button";
import styles from "./SectionWithBcg.module.scss";
import clsx from "clsx";

const SectionWithBcg = () => {
  return (
    <div className={styles.bcgSection}>
      <p className={clsx("container", styles.heroTxt)}>
        DOWIEDZ SIĘ JAK MOŻEMY POMÓC TOBIE.
      </p>
      <Button name={"KONTAKT"} link={"#contact"} />

      <div className={styles.cover}></div>
    </div>
  );
};

export default SectionWithBcg;
