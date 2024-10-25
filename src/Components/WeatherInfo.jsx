import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { InfinitySpin } from 'react-loader-spinner'
import { AcUnit, WbSunny, Cloud } from '@mui/icons-material';


export default function WeatherApp({ weatherInfo, isLoading, isError }) {
    const INIT_URL = "https://images.unsplash.com/photo-1553018622-b3e38e625798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFkJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1496151981150-6d7319e97e56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1454692173233-f4f34c12adad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHx3aW50ZXJ8ZW58MHx8MHx8fDA%3D"
    const HUMID_URL = "https://plus.unsplash.com/premium_photo-1664112065598-77832fcd9b8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWR5fGVufDB8MHwwfHx8MA%3D%3D"
    const info = weatherInfo;

    return (
        <>
            <div>
                {
                    !isError ?
                        isLoading ?
                            <InfinitySpin
                                visible={true}
                                width="200"
                                color="#4fa94d"
                                ariaLabel="infinity-spin-loading"
                            />
                            :

                            <div
                                style={{
                                    border: '1px solid rgb(0, 0, 0, 0.5)',
                                    borderRadius: '5px'
                                }}
                            >
                                <Card sx={{ maxWidth: 500 }}>
                                    <CardMedia
                                        sx={{ height: 200, width: 370 }}
                                        image={info.humidity > 80 ? HUMID_URL : (info.temp < 20 ? COLD_URL : HOT_URL)}
                                        title="green iguana"
                                    />
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}
                                    >
                                        <h2
                                            style={{
                                                width: '100%', 
                                                height: '100%', 
                                                margin: '0', 
                                                display: 'flex', 
                                                justifyContent: 'center', 
                                                alignItems: 'center',
                                                marginTop: '15px'
                                            }}
                                        >
                                            {info.city_name}
                                            &nbsp;&nbsp;
                                            {info.humidity > 80 ? <Cloud/> : (info.temp < 20 ? <AcUnit/> : <WbSunny/>)}
                                        </h2>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                padding: '12px'
                                            }}
                                        >
                                            <span><b>Weather</b>: {info.weather.charAt(0).toUpperCase() + info.weather.slice(1)}</span>
                                            <span><b>Latitude</b>: {info.lat} &deg;N</span>
                                            <span><b>Longitude</b>: {info.lon} &deg;E</span>
                                            <span><b>Feels Like</b>: {info.feels_like} &deg;C</span>
                                            <span><b>Humidity</b>: {info.humidity} g/m<sup>3</sup></span>
                                            <span><b>Pressure</b>: {info.pressure} Pa</span>
                                            <span><b>Sea Level</b>: {info.sea_level} mm</span>
                                            <span><b>Temperature</b>: {info.temp} &deg;C</span>
                                            <span><b>Min Temperature</b>: {info.temp_min} &deg;C</span>
                                            <span><b>Max Temperature</b>: {info.temp_max} &deg;C</span>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        :
                        <h3>No such place found in server</h3>
                }
            </div>
        </>
    )
}