import styles from "./ProductsSection.module.scss";
import Tile from "components/Tile/Tile";
import { nanoid } from "nanoid";

const ProductsSection = ({ title, data, id }) => {
  return (
    <div className="container" id={id}>
      <h3 data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000">
        {title}
      </h3>
      <ul className={styles.productBox}>
        {data.map((product) => (
          <li key={nanoid()} className={styles.productTile}>
            <Tile
              img={product.imgUrl}
              title={product.name}
              text={product.description}
              isAvailable={product.isAvailable}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsSection;
