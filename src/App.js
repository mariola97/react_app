import React, { useState } from 'react'
import styles from './index.css'
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
            <h1>{data.name}</h1>
          </div>
          <div className='country'>
          {data.sys ?<p>{data.sys.country}</p>:null}
          </div>
          <div className="temp">
            {data.main ?<h2>{((parseFloat(data.main.temp)-32)*5/9).toFixed(2)} °C</h2>:null}
          </div>
          <div className='icon'>
            {data.weather ?<img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img>: null}
          </div>
          <div className="desc">
          {data.weather ?<p>{data.weather[0].description}</p> :null}
          </div>
        </div>
        <div className="bottom">
          <div className="wind">
          {data.wind ?<p>{data.wind.speed} m/s</p> :null}
          </div>
          <div className="degrees">
          {data.wind ?<p>{data.wind.deg}</p>:null}
          </div>
          <div className="pressure">
          {data.main ?<p>{data.main.pressure} hpa</p> :null}
          </div>
        </div>
      </div>



      
    </div>
  );
  }

export default App;
