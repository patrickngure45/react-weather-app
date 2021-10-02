import React from "react";
import Main from "./page/Main";

import "./app.css";

const App = () => {
  return (
    <main className="app">
      <h1>
        Weather <span>Forecast</span>{" "}
      </h1>
      <Main />
    </main>
  );
};

export default App;
