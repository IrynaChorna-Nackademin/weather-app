import React, { useContext, useState, useEffect } from 'react';
import ForecastList from './ForecastList';
import { CurrentLocationContext } from '../Contexts/CurrentLocationContext';

const urlParams = {
    base: "https://api.weatherbit.io/v2.0/forecast/daily",
    key: "0550656edb654f80a5a8d176d3710c99",
    language: 'sv',
    unit: 'metric',
    days: '5'
}
const ForecastConteiner = () => {
    
    const {currentLocation} = useContext(CurrentLocationContext);
    const [forecast, setForecast] = useState([]);
    console.log(forecast)

    const handleErrors=(response)=>{

        if(!response.ok){
            throw new Error(response.statusText);
        }
        return response;
}

    useEffect(()=>{
        
        const url=`${urlParams.base}?city=${currentLocation}&days=${urlParams.days}&lang=${urlParams.language}&key=${urlParams.key}`;
        fetch(url)
        .then(handleErrors)
        .then(response=>response.json())
        .then(result=>{
            setForecast(result);
        },[])
        .catch(error=>{return Promise.reject()});
    },[currentLocation]);

    return ( 

        <div>
            {(typeof forecast.data != "undefined") ? (
            <div className= 'menu col-3'>
                <ForecastList forecastList = {forecast.data}/>            
            </div>
            ) : ([])}
        </div>

    );
}
 
export default ForecastConteiner;

