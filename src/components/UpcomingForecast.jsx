import React from "react";
import styles from "./upcomingForecast.module.css";
import moment from "moment";

const imgUrlBase = "https://www.metaweather.com/static/img/weather";

const UpcomingForecast = ({ forecastData }) => {
  const data = forecastData.consolidated_weather.slice(1);

  console.log(data);
  return (
    <section className={styles.main}>
      {data.map((day) => {
        const weekDay = moment(day.applicable_date)
          .format("dddd")
          .substring(0, 3);
        const imgUrl = day.weather_state_abbr;
        const temperature = Math.round(day.the_temp);
        return (
          <div className={styles.upcomingDaysList}>
            <ul key={day.id}>
              <li>
                <img src={`${imgUrlBase}/${imgUrl}.svg`} alt="" />
                <h6>{weekDay}</h6>
                <p>{temperature} °C</p>
              </li>
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default UpcomingForecast;
