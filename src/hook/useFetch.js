import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL = "https://www.metaweather.com/api/location";
const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useFetch = (searchLoaction) => {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  const fetchLocationId = async () => {
    setIsLoading(false);
    setIsError("");
    const { data } = await axios.get(`${REQUEST_URL}/search`, {
      params: { query: searchLoaction },
    });
    setIsLoading(true);
    if (!data || data.length === 0) {
      setIsLoading(false);
      setIsError("No such location found, please try again");
      return;
    }
    const locationId = data[0].woeid;
    setIsError("");
    fetchData(locationId);
  };
  const fetchData = async (location) => {
    const { data } = await axios(`${REQUEST_URL}/${location}`);
    if (data) {
      setForecastData(data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setIsError("something went wrong");
    }
  };
  useEffect(() => {
    fetchLocationId();
    // eslint-disable-next-line
  }, [searchLoaction]);
  return {
    isLoading,
    isError,
    forecastData,
    setForecastData,
  };
};

export default useFetch;
