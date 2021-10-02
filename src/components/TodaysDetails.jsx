import React from "react";
import styles from "./todaysDetails.module.css";

const TodaysDetails = ({ forecastData }) => {
  const data = forecastData.consolidated_weather[0];
  const Predictability = data.predictability;
  const Humidity = data.humidity;
  const Wind = Math.round(data.wind_speed);
  const AirPressure = data.air_pressure;
  const MaxTemp = Math.round(data.max_temp);
  const MinTemp = Math.round(data.min_temp);
  return (
    <section className={styles.main}>
      <div className={styles.details}>
        <h4>Predictability</h4> <p>{Predictability}%</p>
      </div>
      <div className={styles.details}>
        <h4>humidity</h4> <p>{Humidity}%</p>
      </div>
      <div className={styles.details}>
        <h4>wind</h4> <p>{Wind}km/h</p>
      </div>
      <div className={styles.details}>
        <h4>air pressure</h4> <p>{AirPressure}mb</p>
      </div>
      <div className={styles.details}>
        <h4>max temp</h4> <p>{MaxTemp} °C</p>
      </div>
      <div className={styles.details}>
        <h4>min temp</h4> <p>{MinTemp}°C</p>
      </div>
    </section>
  );
};

export default TodaysDetails;
