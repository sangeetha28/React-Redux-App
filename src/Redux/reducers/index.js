import {combineReducers } from 'redux';
import fetchData from './reducers_fetchdata'

const rootReducers = combineReducers ({
   //wired fetchData with the Rootreducers
    // global weather key will be responsible for weathher
    weather: fetchData,
});

export default rootReducers;
