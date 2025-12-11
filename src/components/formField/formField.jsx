import React from "react";
import styles from "./formField.module.css";
import errorIcon from "/icons/icon-error.svg";

const FormField = ({
  label,
  id,
  value,
  type,
  error,
  placeholder,
  onChange,
}) => {
  const containerClassName = `${styles.inputContainer} ${
    error ? styles.error : ""
  }`;

  return (
    <div className={containerClassName}>
      {/* This <label> is for accessibility.visually hidden but can be read by srean readers
       */}
      <label htmlFor={id} className={styles.visuallyHidden}>
        {label}
      </label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
        aria-invalid={error ? "true" : "false"} // Also for accessibility
      />

      {error && <img src={errorIcon} alt="" className={styles.errorIcon} />}

      {error && (
        <span className={styles.errorMessageContainer}>
          <p>{error}</p>
        </span>
      )}
    </div>
  );
};

export default FormField;
