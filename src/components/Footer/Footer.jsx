import styles from "./Footer.module.scss";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlPhone,
  SlEnvolope,
} from "react-icons/sl";

const Footer = () => {
  return (
    <>
      <div className={styles.borderLine}></div>
      <div className={styles.footerBox}>
        <div className={styles.contact}>
          <div>
            <SlPhone />
            <p>662 965 442</p>
          </div>
          <div>
            <SlEnvolope />
            <p>lanthan.electronics@gmail.com</p>
          </div>
        </div>
        <div>
          <p>Lanthan electronics </p>
          <p>Sebastian Kiedrowski </p>
          <p>ul. Czarnieckiego 13/5, 80-239 Gdańsk</p>

          <p>NIP: 584 255 37 36</p>
        </div>
        <SlSocialFacebook />
        <SlSocialInstagram />
      </div>
    </>
  );
};

export default Footer;
