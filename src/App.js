import React, { useState } from "react";
import CurrentLocation from "./currentlocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Developed by{" "}
        <a  href="https://www.TheDavid.dev/" target="_blank">
          The David Developer
        </a>{" "}
        | Powered by{" "}
        your current location.
      </div>
    </React.Fragment>
  );
}

export default App;