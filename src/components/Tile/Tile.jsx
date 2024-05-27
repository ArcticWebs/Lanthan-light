import styles from "./Tile.module.scss";

const Tile = ({ img, title, text }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className={styles.tile}>
      <img src={img} alt="" className={styles.tileImg} />

      <p className={styles.tileTitle}>{title}</p>
      <p className={styles.tileText}>{text}</p>
    </div>
  );
};

export default Tile;
