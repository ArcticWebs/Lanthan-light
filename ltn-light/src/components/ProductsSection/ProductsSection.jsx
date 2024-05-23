import styles from "./ProductsSection.module.scss";

import { nanoid } from "nanoid";

const ProductsSection = ({ title, data, id }) => {
  return (
    <div className="container" id={id}>
      <h3>{title}</h3>
      <ul className={styles.productBox}>
        {data.map((product) => (
          <li key={nanoid()} className={styles.productTile}>
            <img
              src={product.imgUrl}
              alt={product.name}
              className={styles.productImg}
            />
            <p className={styles.productName}>{product.name}</p>
            <p className={styles.description}>{product.description}</p>
          </li>
        ))}
      </ul>
      <img src="assets/pcb2.jpg" alt="" />
    </div>
  );
};

export default ProductsSection;
