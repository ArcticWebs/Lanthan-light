import Button from "components/Button/Button";
import styles from "./SectionWithBcg.module.scss";
import clsx from "clsx";

const SectionWithBcg = () => {
  return (
    <div className={styles.bcgSection}>
      <p
        data-aos="fade-down"
        data-aos-duration="1000"
        className={clsx("container", styles.heroTxt)}
      >
        CHCESZ, ŻEBYŚMY ZDIAGNOZOWALI TWÓJ SPRZĘT?
      </p>
      <div className={styles.linkBox}>
        <Button name={"ZADZWOŃ"} link={"tel:+48662965442"} isCta={true} />
        <Button
          name={"NAPISZ"}
          link={"mailto:lanthan.electronics@gmail.com"}
          isCta={false}
        />
      </div>
      <div className={styles.cover}></div>
    </div>
  );
};

export default SectionWithBcg;
