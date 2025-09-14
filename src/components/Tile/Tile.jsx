import styles from "./Tile.module.scss";

const Tile = ({ img, title, text, isAvailable }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className={styles.tile}>
      <img src={img} alt="" className={styles.tileImg} />

      <p className={styles.tileTitle}>{title}</p>
      <p className={styles.tileText}>{text}</p>

      {isAvailable && (
        <a
          href="https://www.facebook.com/sklepymuzycznegama/?locale=pl_PL"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shopLink}
        >
          Dostępny w sklepie MusicFactory w Gdańsku (dawniej Gama)
        </a>
      )}

      {isAvailable && (
        <a
          href="https://reverb.com/en-pl/shop/v4sound?condition=new"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shopLink}
        >
          oraz na reverb.com
        </a>
      )}
    </div>
  );
};

export default Tile;
