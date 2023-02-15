import React, {useState} from "react";
import styles from "./index.css";
function App() {
  const url='https://api.openweathermap.org/data/2.5/weather?q=Livno&appid=015a5a01c2d58dc27276745e599fa2d8'
  return (
    <div className="app">
      <div className="container">
        <div className="Header">
          <div className="location">
            <h1>Livno</h1>
            <p>BA</p>
          </div>
          <div className="temp">
            <h2>8*C</h2>
          </div>
          <div className="desc">
            <p>Clear</p>
          </div>
        </div>
        <div className="bottom">
          <div className="wind">
            <p>3.3 m/s</p>
          </div>
        </div>
      </div>



      
    </div>
  );
}

export default App;
