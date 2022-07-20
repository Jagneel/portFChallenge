import React, {useState} from 'react';
import useFetch from './useFetch';
import Bar from './beerData'

function handleChange(event){  
    
}



const HandleClick = (e) => {
        e.preventDefault();
        
    }

const abv = () => {
    
    
    
    return (
        <form>
            <input name="abvSelect" onChange={handleChange}></input>
            <button type='submit' onClick={HandleClick}>Check ABV</button>

        </form>
    )
}

export default abv