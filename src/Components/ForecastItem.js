import React from 'react';

const ForecastItem = ({day}) => {
    console.log(day)

    const options = {day: 'numeric', month: 'long' };
    const dayoptions = { weekday: 'long'};
    const dayOfWeek = day.valid_date
    return ( <React.Fragment>
        <li>
            <div>
            <spin>{new Date(dayOfWeek).toLocaleDateString('sv-SE', dayoptions).toUpperCase()} </spin>
            <spin> {new Date(dayOfWeek).toLocaleDateString('sv-SE', options)}</spin><br/>
            <spin>min: {Math.round(day.app_min_temp)}°C - </spin>
            <spin>max: {Math.round(day.app_max_temp)}°C</spin><br/>
            <spin>{day.weather.description}</spin>
            </div>
            <div>
            <img src ={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`} height='40px' alt=''/>
            </div>
        </li>
    </React.Fragment> );
}
 
export default ForecastItem;