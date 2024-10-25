import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { InfinitySpin } from 'react-loader-spinner'
import { AcUnit, WbSunny, Cloud } from '@mui/icons-material';


export default function WeatherApp({ weatherInfo, isLoading, isError }) {
    const INIT_URL = "https://images.unsplash.com/photo-1553018622-b3e38e625798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFkJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1496151981150-6d7319e97e56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1454692173233-f4f34c12adad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHx3aW50ZXJ8ZW58MHx8MHx8fDA%3D"
    const HUMID_URL = "https://images.unsplash.com/photo-1581324330773-8ef0e8207c67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHVtaWRpdHl8ZW58MHx8MHx8fDA%3D"
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
                                            <span><b>Latitude</b>: {info.lat}</span>
                                            <span><b>Longitude</b>: {info.lon}</span>
                                            <span><b>Feels Like</b>: {info.feels_like}</span>
                                            <span><b>Humidity</b>: {info.humidity}</span>
                                            <span><b>Pressure</b>: {info.pressure}</span>
                                            <span><b>Sea Level</b>: {info.sea_level}</span>
                                            <span><b>Temperature</b>: {info.temp}</span>
                                            <span><b>Min Temperature</b>: {info.temp_min}</span>
                                            <span><b>Max Temperature</b>: {info.temp_max}</span>
                                            <span><b>Weather</b>: {info.weather}</span>
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