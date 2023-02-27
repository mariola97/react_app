import React, { useState } from 'react'
import css from './index.css'
function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      fetch (url).then ((response)=>response.json()).then((data)=>{
        setData(data)
        console.log(data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="input"><br></br><br></br>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Unesi grad'
          type="text" />
      </div>
      <div className="container">
        <div className="Header">
          <div className="location">
            <h1>Livno</h1>
            <p>BA</p>
          </div>
          <div className="temp">
            <h2>8°C</h2>
          </div>
          <div className="desc">
            <p>Clear</p>
          </div>
        </div>
        <div className="bottom">
          <div className="wind">
            <p>3.3 m/s</p>
          </div>
          <div className="pressure">
            <p>1015 </p>
          </div>
          <div className="degrees">
            <p>50</p>
          </div>
        </div>
      </div>



      
    </div>
  );
  }

export default App;
