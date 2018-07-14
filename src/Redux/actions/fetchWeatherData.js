import axios from 'axios';


const API_KEY = '26ee29c2af1c372a86f289ae581421c8';

export const FETCH_WEATHER_DATA="FETCH_WEATHER_DATA";

export default function fetchData(city) {
    console.log('Before makinG Ajax Request');
//make an ajax request
    const URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${city},us`
    const response = axios.get(URL);
    return {
        type: FETCH_WEATHER_DATA,
        payload: response
    }
}
