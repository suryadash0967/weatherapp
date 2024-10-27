import { useContext, useState } from "react";
import SearchBox from "./SearchBox";
import WeatherInfo from './WeatherInfo';
import { ThemeContext } from "../App";

export default function WeatherApp({setTheme}) {
    const theme = useContext(ThemeContext)

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

    let darkThemeStyles = {
        backgroundColor: theme === 'dark' ? 'rgb(22, 24, 29)' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000'
    }

    return (
        <div
            style={{
                ...darkThemeStyles,
                width: '100%',
                height: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h2 style={{paddingBottom: '15px'}}>Welcome To OpenWeather</h2>
            <SearchBox updateInfo={updateInfo} setIsLoading={setIsLoading} setIsError={setIsError} setTheme={setTheme} />
            <WeatherInfo weatherInfo={weatherInfo} isLoading={isLoading} isError={isError} />
        </div>
    );
}
