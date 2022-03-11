import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={styles.heading}
            >
              Infected
            </Typography>
            <Typography variant="h5" className={styles.count}>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" className={styles.date}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={styles.heading}
            >
              Recovered
            </Typography>
            <Typography variant="h5" className={styles.count}>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" className={styles.date}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={styles.heading}
            >
              Deaths
            </Typography>
            <Typography variant="h5" className={styles.count}>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" className={styles.date}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>

    </div>
  );
};

export default Cards;