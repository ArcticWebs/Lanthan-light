import clsx from "clsx";
import styles from "./Section.module.scss";

const Section = ({
  firstTxt,
  secondTxt,
  thirdTxt,
  isReversed,
  imageSrc,
  id,
}) => {
  return (
    <div className={styles.secondaryBcgColor} id={id}>
      <div
        className={clsx(
          "container",
          styles.section,
          isReversed && styles.reversed
        )}
      >
        <div className={styles.sectionTxt}>
          <p>{firstTxt}</p>
          <p>{secondTxt}</p>
          <p>{thirdTxt}</p>
        </div>
        <img src={imageSrc} alt="guitar repair" className={styles.image} />
      </div>
    </div>
  );
};

export default Section;
