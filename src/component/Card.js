import React from 'react'
import WeatherApp from './WeatherApp'
import '../asset/style.css'



const Card = () => {
    return (
        <>

            <div className="card p-2 backgroundImage">
                <div className="card-body">
                    <h5 className="card-title text-white">Weather App</h5>
                    <p className="card-subtitle mb-2 text-white">Check me! Before go anywhere</p>
                    <WeatherApp/>
                
      
                </div>
            </div>
        </>
    )
}

export default Card