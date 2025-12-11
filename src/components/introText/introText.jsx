import React from "react";
import styles from "./introText.module.css";

const IntroText = () => {
  return (
    <section className={`${styles.mainContainer}`}>
      <h1 className={styles.heading}>Learn to code by watching others</h1>
      <p className={styles.paragraph}>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </section>
  );
};

export default IntroText;
