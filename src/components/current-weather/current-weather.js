import './current-weather.css'


const CurrentWether = ({currentWeatherData}) => {
    return (
        <>
            <div className="weather">
                <div className="top">
                    <div>
                        <p className='city'>{currentWeatherData.city}</p>
                        <p className='weather-description'>{currentWeatherData.data.weather[0].description}</p>
                    </div>
                    <img src={`icons/${currentWeatherData.data.weather[0].icon}.png`} alt="Weather" className='weather-icon' />
                </div>
                <div className="bottom">
                    <p className="temperature">{Math.round(currentWeatherData.data.main.temp)}°C</p>
                    <div className="details">
                        <div className="parameter-row ">
                            <span className="parameter-label details">Details</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Feels Like</span>
                            <span className="parameter-value">{Math.round(currentWeatherData.data.main.feels_like)}°C</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Wind</span>
                            <span className="parameter-value">{Math.round(currentWeatherData.data.wind.speed)} m/s</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Humidity</span>
                            <span className="parameter-value">{Math.round(currentWeatherData.data.main.humidity)} %</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Pressure</span>
                            <span className="parameter-value">{Math.round(currentWeatherData.data.main.pressure)} hPa</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurrentWether