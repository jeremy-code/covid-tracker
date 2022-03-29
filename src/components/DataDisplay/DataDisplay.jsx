import React from "react";

import styles from "./DataDisplay.module.css";
import { Cards } from "..";

const DataDisplay = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.panel}></div>
      <Cards data={data} />
    </div>
  );
};

export default DataDisplay;
