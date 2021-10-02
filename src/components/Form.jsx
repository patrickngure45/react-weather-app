import React, { useState } from "react";
import styles from "./form.module.css";

const Form = ({ getSearchLocation }) => {
  const [location, setLocation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (location) {
      getSearchLocation(location);
      setLocation("");
    }
  };

  return (
    <div>
      <form className={styles.form}>
        <input
          type="text"
          name="searchLocation"
          id="searchLoaction"
          required
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
