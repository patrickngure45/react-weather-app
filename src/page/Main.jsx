import React, { useState } from "react";
import AllForecastDetails from "../components/AllForecastDetails";
import Form from "../components/Form";

import styles from "./main.module.css";
import useFetch from "../hook/useFetch";
import IsLoading from "../components/IsLoading";

const Main = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const getSearchLocation = (location) => {
    if (location) {
      setSearchLocation(location);
    }
  };
  const { forecastData, isError, isLoading, setForecastData } =
    useFetch(searchLocation);
  return (
    <main className={styles.main}>
      {isLoading ? (
        <IsLoading isLoading={isLoading} />
      ) : forecastData ? (
        <AllForecastDetails
          forecastData={forecastData}
          setForecastData={setForecastData}
        />
      ) : (
        <Form getSearchLocation={getSearchLocation} />
      )}
      {isError && <div className={styles.errorPage}>{isError}</div>}
    </main>
  );
};

export default Main;
