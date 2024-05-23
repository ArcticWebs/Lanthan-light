import Button from "components/Button/Button";
import styles from "./Header.module.scss";
import clsx from "clsx";

const Header = () => {
  return (
    <div className={styles.headerSection}>
      <div className={styles.heading}>
        <h1>
          Z PASJĄ DBAMY O TWOJĄ
          <span className={styles.ctaTxt}> ELEKTRONIKĘ.</span>
        </h1>
        <h2>SERWIS ELEKTRONICZNY I GDAŃSKA MANUFAKTURA EFEKTÓW GITAROWYCH</h2>
        <div className={clsx("container", styles.linkBox)}>
          <Button name={"SERWIS"} isCta={false} link={"#service"} />
          <Button name={"PRODUKTY"} isCta={true} link={"#products"} />
        </div>
      </div>
      <div className={styles.cover}></div>
    </div>
  );
};

export default Header;
