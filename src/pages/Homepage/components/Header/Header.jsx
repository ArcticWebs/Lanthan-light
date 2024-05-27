import Button from "components/Button/Button";
import styles from "./Header.module.scss";
import clsx from "clsx";

const Header = () => {
  return (
    <div className={styles.headerSection}>
      <div className={clsx("container", styles.heading)}>
        <h1
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
          Z PASJĄ DBAMY O TWOJĄ
          <p className={styles.ctaTxt}> ELEKTRONIKĘ.</p>
        </h1>
        <h2 data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000">
          SERWIS ELEKTRONICZNY I GDAŃSKA MANUFAKTURA EFEKTÓW GITAROWYCH
        </h2>
        <div className={styles.linkBox}>
          <Button name={"SERWIS"} isCta={true} link={"#service"} />
          <Button name={"PRODUKTY"} isCta={false} link={"#products"} />
        </div>
      </div>
      <div className={styles.cover}></div>
    </div>
  );
};

export default Header;
