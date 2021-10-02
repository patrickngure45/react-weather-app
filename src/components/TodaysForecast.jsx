import React from "react";
import styles from "./todaysForecast.module.css";
import WeatherImg from "../assets/images/weather.jpg";
import { ImLocation2 } from "react-icons/im";
import moment from "moment";

const TodaysDetails = ({ forecastData, setForecastData }) => {
  let data = forecastData.consolidated_weather[0];
  let WeekkDay = moment(data.applicable_date).format("dddd");
  let Date = moment(data.applicable_date).format("MMM Do");
  let temperature = Math.round(data.the_temp);
  let description = data.weather_state_name;
  return (
    <section className={styles.main}>
      <img src={WeatherImg} alt="clouds" />
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <h4>{WeekkDay}</h4>
          <p>{Date}</p>
          <h5>
            <span>
              <ImLocation2 fontSize="13px" />
            </span>
            {forecastData.title}
          </h5>
        </div>
        <div className={styles.bottomContainer}>
          <h4>{temperature} °C</h4>
          <p>{description}</p>
          <button type="button" onClick={() => setForecastData(null)}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default TodaysDetails;
