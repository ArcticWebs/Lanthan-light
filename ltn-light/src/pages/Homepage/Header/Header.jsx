import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerSection}>
      <div className={styles.heading}>
        <h1>
          Z pasją dbamy o Twoją{" "}
          <span className={styles.ctaTxt}>elektronikę.</span>
        </h1>
        <h2>Serwis elektroniczny i gdańska manufaktura efektów gitarowych</h2>
      </div>

      <div className={styles.cover}></div>
    </div>
  );
};

export default Header;
