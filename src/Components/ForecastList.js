import React from 'react';
import ForecastItem from './ForecastItem';

const ForecastList = ({forecastList}) => {
    
    console.log(forecastList)
    return ( 
        <React.Fragment>
            <div className = 'row'>
                <ul>
                    {forecastList.map((item, index)=>{
                        return(<ForecastItem day = {item} key = {index} />)
                    }) }    
                </ul>
            </div>
        </React.Fragment>
    );
}
 
export default ForecastList;