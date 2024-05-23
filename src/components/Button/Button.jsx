import styles from "./Button.module.scss";
import clsx from "clsx";

const Button = ({ name, isCta, link }) => {
  return (
    <a
      href={link}
      className={clsx(
        styles.mainButton,
        (isCta && styles.ctaButton) || styles.primeButton
      )}
    >
      {name}
    </a>
  );
};

export default Button;
