import React from "react";
import TodaysDetails from "./TodaysDetails";
import TodaysForecast from "./TodaysForecast";
import styles from "./allForecastDetails.module.css";
import UpcomingForecast from "./UpcomingForecast";
const AllForecastDetails = ({ forecastData, setForecastData }) => {
  return (
    <section className={styles.main}>
      <TodaysForecast
        forecastData={forecastData}
        setForecastData={setForecastData}
      />
      <div className={styles.container}>
        <TodaysDetails forecastData={forecastData} />
        <UpcomingForecast forecastData={forecastData} />
      </div>
    </section>
  );
};

export default AllForecastDetails;
