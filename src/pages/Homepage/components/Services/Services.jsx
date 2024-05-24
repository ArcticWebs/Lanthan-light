import clsx from "clsx";
import styles from "./Services.module.scss";
import Tile from "components/Tile/Tile";
import { nanoid } from "nanoid";

const Services = ({ id, data }) => {
  return (
    <div id={id}>
      <div className={clsx("container", styles.section)}>
        <h3>NASZE SPECJALIZACJE</h3>
        <h4>Zobacz, jak możemy pomóc Tobie</h4>
        <ul className={styles.sectionList}>
          {data.map((service) => (
            <li key={nanoid()}>
              <Tile
                img={service.imgUrl}
                title={service.name}
                text={service.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
