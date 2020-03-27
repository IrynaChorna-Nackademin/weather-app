import React from 'react';
import CurrentLocationContextProvider from './Contexts/CurrentLocationContext';
import WeatherConteiner from './Components/WeatherContainer';
import ForecastConteiner from './Components/ForecastConteiner';

function App() {

  return (
    <main >
      <div className = 'bg'>
      <CurrentLocationContextProvider>
        <WeatherConteiner/>
        <ForecastConteiner/>
      </CurrentLocationContextProvider>
      </div>
      <div className= 'footer'>
        <p>Inlämningsuppgift 2 | Iryna Chorna</p>
      </div>
    </main>
  );
}

export default App;
