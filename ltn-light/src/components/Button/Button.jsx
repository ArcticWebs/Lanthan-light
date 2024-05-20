import styles from "./Button.module.scss";
import clsx from "clsx";

const Button = ({ name, isCta }) => {
  return (
    <a
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
