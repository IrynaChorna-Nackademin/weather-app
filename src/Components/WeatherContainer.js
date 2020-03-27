import React, { useState, useContext, useEffect } from 'react';
import { CurrentLocationContext } from '../Contexts/CurrentLocationContext';
import Search from './Search';
import WeatherItems from './WeatherItems';

const urlParams = {
    base: "https://api.openweathermap.org/data/2.5/weather",
    key: "4d49180d1fc938ab7b111450c489b136",
    language: 'se',
    unit: 'metric'
}

const WeatherConteiner = () => {

  const [weather, setWeather] = useState({});
  const {currentLocation, changeLocation} = useContext(CurrentLocationContext)
  
  useEffect(()=>{

    const url = `${urlParams.base}?q=${currentLocation}&units=${urlParams.unit}&lang=${urlParams.language}&APPID=${urlParams.key}`;
        
    fetch(url)
      .then(response => response.json())
      .then(result => {
          setWeather(result);
          console.log(result);
      });
  }, [currentLocation]);

  const search= (newLocation)=>{
    changeLocation(newLocation)
  }
  
  
  return ( 
      <div>
        <div className="header col-12">
          <div className='logo col- 6'>
            <h4>Väderapplikation</h4>
          </div>
          <div className="search-box col-6">
            <Search search = {search}/>          
          </div>
        </div>
        {(typeof weather.main != "undefined") ? (
        <div className='aside col-9'>
          <WeatherItems weather = {weather}/>                  
        </div>
        ) : (currentLocation)}
      </div>
      
  );
}
 
export default WeatherConteiner;