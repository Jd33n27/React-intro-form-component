import React from "react";
import styles from "./button.module.css";

const Button = ({ variants, children, onClick }) => {
  return (
    <section className={[styles.buttonContainer]}>
      <button
        onClick={onClick}
        className={`${styles.similarButton} ${styles[`variant-${variants}`]}`}
      >
        {children}
      </button>
    </section>
  );
};

export default Button;
