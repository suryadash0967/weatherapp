import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from "../App";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Padding } from '@mui/icons-material'

export default function SearchBox({ updateInfo, setIsLoading, setIsError, setTheme }) {
    const theme = useContext(ThemeContext)
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
        catch (err) {
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

                <div
                    style={{
                        display: 'flex'
                    }}
                >
                    <TextField
                        id="filled-basic"
                        label="City"
                        variant="filled"
                        value={city}
                        onChange={handleInputChange}
                        sx={{
                            backgroundColor: theme === 'dark' ? 'rgb(40, 40, 40)' : '#fff',
                            input: { color: theme === 'dark' ? '#fff' : '#000' },
                            label: { color: theme === 'dark' ? '#fff' : '#000' },
                        }}
                    />
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '20px'
                        }}
                    >
                        {theme === 'dark' ? (
                            <DarkModeIcon
                                style={{
                                    color: '#f1c40f',
                                    cursor: 'pointer',
                                    fontSize: '35px',
                                    backgroundColor: theme === 'dark' ? '#000' : 'rgb(231 231 231)',
                                    padding: '5px',
                                    borderRadius: '50%'
                                }}
                                onClick={() => setTheme('light')}
                            />
                        ) : (
                            <WbSunnyIcon
                                style={{
                                    color: '#f39c12',
                                    cursor: 'pointer',
                                    fontSize: '35px',
                                    backgroundColor: theme === 'dark' ? '#000' : 'rgb(231 231 231)',
                                    padding: '5px',
                                    borderRadius: '50%'
                                }}
                                onClick={() => setTheme('dark')}
                            />
                        )}
                    </div>

                </div>

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