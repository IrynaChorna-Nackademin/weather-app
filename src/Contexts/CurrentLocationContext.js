import React, { useState, useEffect, createContext} from 'react';


export const CurrentLocationContext =createContext()
const CurrentLocationContextProvider = (props) => {

    const [currentLocation, setCurrentLocation] = useState('');
    
    const handleErrors=(response)=>{

            if(!response.ok){
                throw Error(response.statusText);
            }
            return response;
    }
    
    useEffect(()=>{

       const url = 'https://ipapi.co/json';        
        fetch(url)
        .then(handleErrors)
        .then(response => response.json())
        .then(location =>{
            const c = location.city
            setCurrentLocation(city=>city= c)
        })
        .catch(console.error())            
        },[]);
        console.log(currentLocation)  
        const changeLocation=(newValue)=>{
            setCurrentLocation(newValue)
        }
        
        return (<CurrentLocationContext.Provider value={{currentLocation, changeLocation}}>
        {props.children}
    </CurrentLocationContext.Provider>);
}
export default CurrentLocationContextProvider;