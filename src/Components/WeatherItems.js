import React from 'react';

const WeatherItems = ({weather}) => {

    const timeoptions = { hour: "numeric", minute: "numeric"};
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (<React.Fragment>
                <div className="location-box">
                    <div className="location">{weather.name}, {weather.sys.country}</div>
                    <div className="date">{new Date().toLocaleDateString('sv-SE', options).toUpperCase()}</div>
                    <div className="time">{new Date().toLocaleTimeString('sv-SE', timeoptions)}</div>
                </div>
                <div className='weather-box'>
                    <div className='temp'>{Math.round(weather.main.temp)}°C</div>
                    <div className='weather'><img src ={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} height='180px' alt=''/></div>
                    <div className='weather'>{weather.weather[0].description.toUpperCase()}</div>
                </div>  
            </React.Fragment> );
}
export default WeatherItems;