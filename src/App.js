import React, { useState } from 'react'
import styles from './index.css'
function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=015a5a01c2d58dc27276745e599fa2d8`
  
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
          {data.sys ?<img src={`http://www.geonames.org/flags/x/${data.sys.country.toLowerCase()}.gif`} width="60" height="30"></img>:null}
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
          {data.wind ?(()=>{
            if(data.wind.deg>330||data.wind.deg<30){ return (<p>Sjeverni vjetar</p>)
          } if(data.wind.deg>30){ return (<p>Sjeveroistočni vjetar</p>)
        }   if(data.wind.deg>120){ return (<p>Istočni vjetar</p>)
        }   if(data.wind.deg>160){ return (<p>Jugoistočni vjetar</p>)
      }     if(data.wind.deg>200){ return (<p>Južni vjetar</p>)
      }     if(data.wind.deg>240){ return (<p>Jugozapadni vjetar</p>)
    }       if(data.wind.deg>280) {return (<p>Zapadni vjetar</p>)
  }         if(data.wind.deg<330) {return (<p>Sjeverozapadni vjetar</p>)
          } 
          })():null}
          </div>
          <div className="pressure">
            {data.main ?<p>{data.main.pressure} hPa</p>:null}
          </div>
        </div>
      </div>



      
    </div>
  );
  }

export default App;
