import React, { useState } from "react";

import { CountryPicker, Chart } from "..";
import styles from "./ChartCard.module.css";
import { fetchData } from "../../api";

const ChartCard = ({ data, setData }) => {
  const [country, setCountry] = useState("");

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  };

  return (
    <div className={styles.chartCard}>
      <div className={styles.leftSection}>
        <h1>Graph</h1>
        <CountryPicker handleCountryChange={handleCountryChange} />
      </div>
      <div className={styles.graph}>
        <Chart data={data} country={country} />
      </div>
    </div>
  );
};

export default ChartCard;
