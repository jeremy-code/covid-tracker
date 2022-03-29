import React from "react";
import { Card, Typography } from "@mui/material";
import CountUp from "react-countup";

import styles from "./Cards.module.css";

const infectedStyle = {
  borderBottom: "10px solid #5a67d8",
};

const recoveredStyle = {
  borderBottom: "10px solid #48bb78",
};

const deathsStyle = {
  borderBottom: "10px solid #e53e3e",
};

const StatsCard = ({ type, style, data, lastUpdate }) => {
  return (
    <Card className={styles.card} style={style}>
      <Typography className={styles.heading}>{type}</Typography>
      <Typography variant="h5" gutterBottom>
        <CountUp start={0} end={data.value} duration={2.5} separator="," />
      </Typography>
      <Typography color="textSecondary">
        {new Date(lastUpdate).toDateString()}
      </Typography>
    </Card>
  );
};

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <StatsCard
        type="infected"
        style={infectedStyle}
        data={confirmed}
        lastUpdate={lastUpdate}
      />
      <StatsCard
        type="recovered"
        style={recoveredStyle}
        data={recovered}
        lastUpdate={lastUpdate}
      />
      <StatsCard
        type="deaths"
        style={deathsStyle}
        data={deaths}
        lastUpdate={lastUpdate}
      />
    </div>
  );
};

export default Cards;
