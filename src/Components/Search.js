import React, { useContext, useRef } from 'react';   
import { CurrentLocationContext } from '../Contexts/CurrentLocationContext';

const Search = () => {

  const {currentLocation, changeLocation} = useContext(CurrentLocationContext)
  const newLocation = useRef()
  const oldLocation = currentLocation
  const handleClick =()=>{
    changeLocation(newLocation.current.value.length ?  newLocation.current.value : oldLocation)
    newLocation.current.value=''
    
  }
  return (<React.Fragment>
            <input className='search-bar'  type = 'search' placeholder = 'Sök platser här' ref = {newLocation} required />
            <button className='search-button' onClick = {handleClick}>
              <i className="fa fa-search"></i>
            </button>
          </React.Fragment> );
}
export default Search;


