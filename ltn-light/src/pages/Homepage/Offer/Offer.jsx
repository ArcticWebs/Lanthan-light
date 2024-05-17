import styles from "./Offer.module.scss";
import clsx from "clsx";
import fixing from "assets/fixing.jpg";

const Offer = () => {
  return (
    <div className={clsx("container", "section")}>
      <div className="sectionTxt">
        <p>Specjalizujemy sie w naprawach trudnych przypadków.</p>
        <p>
          Serwisujemy przede wszystkim sprzęt muzyczny - gitary elektryczne,
          wzmacniacze gitarowe, sprzęt estradowy i studyjny.
        </p>
        <p>
          Dzięki skutecznym naprawom, od lat cieszymy się dobrą opinią i
          zaufaniem muzyków.
        </p>
      </div>
      <img src={fixing} alt="guitar repair" className="image" />
    </div>
  );
};

export default Offer;
