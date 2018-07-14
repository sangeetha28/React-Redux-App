// if there are multiple exports in the class, then pull just one property
// very important
import { FETCH_WEATHER_DATA } from '../actions/fetchWeatherData'

// reducers will return a  piece of application state
export default function(state=[],action) {
    console.log('FETCH WEATHER DATA'+ FETCH_WEATHER_DATA);
    switch(action.type) {
        case FETCH_WEATHER_DATA: {
            console.log('iNSIDE ACTION REDUCERS');
            // donot mutatte the State instead return a new object or an array which accumulates the previous states
            return [ action.payload.data , ...state]
        }
    }
    return state;
}