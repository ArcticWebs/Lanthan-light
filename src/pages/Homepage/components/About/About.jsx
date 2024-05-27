import styles from "./About.module.scss";
import clsx from "clsx";
import { SlSocialFacebook } from "react-icons/sl";

const About = () => {
  return (
    <div className={styles.bcgSection}>
      <div className={clsx("container", styles.sectionBox)}>
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          className={styles.heroTxt}
        >
          PONAD <span className={styles.ctaTxt}>15 LAT DOŚWIADCZENIA</span> W
          SERWISIE ELEKTRONIKI.
        </p>
        <div
          className={styles.specialistDescription}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <p className={styles.aboutSpecialist}>
            Jestem osobą cierpliwą i zdeterminowaną, z głęboką pasją do
            naprawiania wszelkiego rodzaju sprzętu. Od 2005 roku udało mi się
            przekształcić moje hobby w pracę w branży elektronicznej. Moje
            podejście do pracy charakteryzuje się nieustępliwością i dbałością o
            najwyższą jakość wykonanej usługi. Zawsze staram się znaleźć
            rozwiązanie każdego problemu, niezależnie od tego, jak trudne może
            się to wydawać.
          </p>
          <p className={styles.aboutSpecialist}>
            Muzyka odgrywa kluczową rolę w moim życiu, pozwalając mi na
            wyrażanie kreatywności i zrozumienie potrzeb moich klientów-muzyków.
            Znając ich wymagania i oczekiwania, mogę lepiej dostosować swoje
            usługi, oferując precyzyjne i skuteczne rozwiązania. Dzięki temu
            połączeniu pasji i zawodowej wiedzy, każda naprawa czy projekt stają
            się dla mnie okazją do stworzenia czegoś wyjątkowego.
          </p>
          <p className={styles.aboutSpecialist}>
            Moim celem jest zawsze dostarczanie usług najwyższej jakości, które
            przynoszą satysfakcję zarówno mnie, jak i moim klientom.
          </p>
          <p className={styles.aboutSpecialist}>
            Zobacz relacje z moich napraw na Facebooku!{" "}
            <a
              className={styles.smIcon}
              href="https://www.facebook.com/profile.php?id=61550097236499"
            >
              <SlSocialFacebook />
            </a>
          </p>
        </div>
      </div>
      <div className={styles.cover}></div>
    </div>
  );
};

export default About;
