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
import Button from "components/Button/Button";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={clsx("container", styles.footerBox)} id="contact">
        <div className={styles.companyData}>
          <img src={logo} alt="" />
          <p>Sebastian Kiedrowski </p>
          <p>NIP: 584 255 37 36</p>
        </div>
        <div className={styles.hiddenButton}>
          <Button name={"ZADZWOŃ"} link={"tel:+48662965442"} isCta={false} />
        </div>
        <div className={styles.contact}>
          <p className={styles.bold}>KONTAKT</p>
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
      <div className={styles.borderLine}></div>
      <div className={styles.smIcons}>
        <a
          href="https://www.facebook.com/profile.php?id=61550097236499"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialFacebook />
        </a>
        <a
          href="https://www.instagram.com/lanthan_electronics/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialInstagram />
        </a>
      </div>
      <div className={styles.copyrights}>
        <PiCopyright />

        <p>Copyrights by Anna Kiedrowska, 2024</p>
        <a
          href="https://arcticwebs.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={arctic} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
