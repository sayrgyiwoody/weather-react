import React from 'react'

const WeatherInfo = ({data}) => {
    
    const kelvinToFahrenheit = (kelvinValue) => {
        const fahrenheit = (( kelvinValue - 273.15) * 9/5) + 32;
        return fahrenheit.toFixed(1);
    }

    const kelvinToCelsius = (kelvinValue) => {
        const celsius =  kelvinValue - 273.15;
        return celsius.toFixed(1);
    }

    if(JSON.stringify(data) !== '{}'){
        return (
            <div className='text-center mt-6'>
              <h2 className=' text-2xl font-medium '>{data.name} , {data.sys.country}</h2>
              <p className=' text-gray-700'>few clouds</p>
              <img className=' mx-auto' src={`http://openweathermap.org/img/w/02n.png`} alt="weather icon" />
        
              <h2 className=' my-4 text-4xl font-medium '>{kelvinToCelsius(data.main.temp)} °C</h2>
              <p className=' text-gray-700'>temperature from <span className=' font-medium '>{kelvinToCelsius(data.main.temp_min)}</span> to <span className=' font-medium '>{kelvinToCelsius(data.main.temp_max)}°C</span>,</p>
              <p className=' text-gray-700'>wind <span className=' font-medium '>{data.wind.speed} m/s</span> , clouds <span className=' font-medium '>{data.clouds.all} %</span></p>

            </div>
          )
    }

    
}

export default WeatherInfo
