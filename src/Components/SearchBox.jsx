import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

export default function SearchBox({ updateInfo, setIsLoading, setIsError }) {
    const [city, setCity] = useState("")

    const API_KEY = 'ea391a68e116f490ab44cda5323802ae'
    const URL = `https://api.openweathermap.org/data/2.5/weather`

    let getWeather = async () => {
        setIsError(false)
        try {
            let response = await fetch(`${URL}?q=${city.trim()}&appid=${API_KEY}&units=metric`);
            let data = await response.json();
            let result = {
                city_name: data.name,
                lat: data.coord.lat,
                lon: data.coord.lon,
                feels_like: data.main.feels_like,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                sea_level: data.main.sea_level,
                temp: data.main.temp,
                temp_max: data.main.temp_max,
                temp_min: data.main.temp_min,
                weather: data.weather[0].description
            };
            return result;
        }
        catch (err){
            setIsError(true)
        }
    }


    let handleInputChange = (event) => {
        setCity(event.target.value)
    }

    let handleSubmit = async (event) => {
        setIsLoading(true)
        event.preventDefault();
        let data = await getWeather();
        updateInfo(data)
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    value={city}
                    onChange={handleInputChange}
                />
                <Button
                    variant="contained"
                    type="submit"
                    style={{
                        height: '2.5rem',
                        width: '6rem',
                        margin: '10px auto'
                    }}
                >
                    Submit
                </Button>

            </form>
        </>
    )
}