import React, { useState } from 'react'
import '../asset/style.css'
import SearchCity from './SearchCity'



const WeatherApp = () => {

    const [inputValue, setInputValue] = useState('')

    const [data, setData] = useState([])
    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }
    console.log(inputValue)
    const api = {
        key: "812d59c6c605e72cacbb1e388371f992",
        base: "https://api.openweathermap.org/data/2.5/"

    }
    const { key, base } = api // Destructuring of Object

    const fetchWeatherApi = () => {
        fetch(`${base}weather?q=${inputValue}&appid=${key}&units=metric`)
            .then((res) => {
                res.json().then((response) => {
                setData([response])
                })
            })

    }
    console.log(data)

    return (
        <>

            <SearchCity className='w-100 inputFeild' value={inputValue} onChange={inputHandler} />
            <button className='btn btn-transparent w-50' onClick={fetchWeatherApi}>Search</button>
            {
                data.map((v, i)=>{
                    return( 
                    <div key={i}>
                    <div className='container displayStyling'><h1>{v.name}</h1></div>    
                    <div className='container displayStyling'><h1>{v.weather[0].main}</h1></div>    
                    <div className='container displayStyling' ><h1 className='text-center'>{Math.round(v.main.temp)}&deg;C</h1></div>
                    </div>)
                })
            }
            
        </>
    )
}

export default WeatherApp