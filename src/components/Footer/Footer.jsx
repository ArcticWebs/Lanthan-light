import styles from "./Footer.module.scss";
import clsx from "clsx";
import { PiCopyright } from "react-icons/pi";
import logo from "assets/Logo-white.png";
import arctic from "assets/arctic.png";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlPhone,
  SlEnvolope,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={clsx("container", styles.footerBox)} id="contact">
        <div className={styles.companyData}>
          <img src={logo} alt="" />
          <p>Sebastian Kiedrowski </p>
          <p>NIP: 584 255 37 36</p>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.contact}>
          <p>KONTAKT</p>
          <div className={styles.contactTile}>
            <SlPhone />
            <p>662 965 442</p>
          </div>
          <div className={styles.contactTile}>
            <SlEnvolope />
            <p>lanthan.electronics@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.smIcons}>
        <a href="https://www.facebook.com/profile.php?id=61550097236499">
          <SlSocialFacebook />
        </a>
        <a href="https://www.instagram.com/lanthan_electronics/">
          <SlSocialInstagram />
        </a>
      </div>
      <div className={styles.copyrights}>
        <PiCopyright />

        <p>Copyrights by Anna Kiedrowska, 2024</p>
        <a href="https://github.com/ArcticWebs">
          <img src={arctic} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
