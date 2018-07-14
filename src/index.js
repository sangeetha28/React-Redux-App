import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import ListCities from './components/listCities';


import reducers from  './Redux/reducers';

class App extends Component{
    render(){
        return <div>
            Weather App!
            <SearchBar />
            <ListCities />
            </div>
    }

}

const createMiddleWareStore = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(<Provider store={createMiddleWareStore(reducers)}>
    <App />
    </Provider>,
document.querySelector('.container'));