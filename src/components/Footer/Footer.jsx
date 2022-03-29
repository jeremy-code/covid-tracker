import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.text}>
        Made with ❤️ by{" "}
        <a
          href="https://www.jeremynguyen.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jeremy Nguyen
        </a>
      </h1>
    </div>
  );
};

export default Footer;
