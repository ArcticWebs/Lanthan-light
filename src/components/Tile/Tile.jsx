import styles from "./Tile.module.scss";

const Tile = ({ img, title, text, isAvailable }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className={styles.tile}>
      <img src={img} alt="" className={styles.tileImg} />

      <p className={styles.tileTitle}>{title}</p>
      <p className={styles.tileText}>{text}</p>
      {isAvailable && (
        <a
          href="https://www.gama.gda.pl/manufacturer/lanthan"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shopLink}
        >
          Dostępny w sklepie Gama w Gdańsku
        </a>
      )}
    </div>
  );
};

export default Tile;
