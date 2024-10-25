import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherInfo from './WeatherInfo';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city_name: "Delhi",
        feels_like: 30.76,
        humidity: 29,
        lat: 28.6667,
        lon: 77.2167,
        pressure: 1008,
        sea_level: 1008,
        temp: 32.05,
        temp_max: 32.05,
        temp_min: 32.05,
        weather: "haze",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)

    const updateInfo = (result) => {
        setWeatherInfo(result);
        setIsLoading(false);
    };

    return (
        <div
            style={{
                width: '100%',
                height: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h2>Welcome To OpenWeather</h2>
            <SearchBox updateInfo={updateInfo} setIsLoading={setIsLoading} setIsError={setIsError} />
            <WeatherInfo weatherInfo={weatherInfo} isLoading={isLoading} isError={isError} />
        </div>
    );
}
