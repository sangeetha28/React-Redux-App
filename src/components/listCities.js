import React,{Component} from 'react';
import { connect } from 'react-redux';
import Chart from './chart';
import GoogleMap from './google';

class ListCities extends Component {


    // e represents the API response object
    //{cod: "200", message: 0.0022, cnt: 40, list: Array(40), city: {…}}
    renderCities(e){

        const temperature = e.list.map(weather => weather.main.temp);
        const pressure = e.list.map(weather => weather.main.pressure);
        const humidity = e.list.map(weather => weather.main.humidity);
        const {lon,lat} = e.city.coord;

//<td><GoogleMap lon={lon} lat={lat} /></td>
        //stringify({}) -> [object Object] stringifying object will return to [object,object]
        // when you conact object with the string, you will get [object,object]
        // inorder to get the real value you need to get down to the key which has a value instead of object
     return(
         <tr key={e.city.name}>
            <td>{e.city.name}</td>
            <td><Chart data={temperature} color="orange" units="K" /></td>
            <td><Chart data={pressure} color="green" units="hPa" /></td>
            <td><Chart data={humidity} color="black" units="%" /></td>
            </tr>
    ) }



    render(){

       console.log('weatherData'+this.props.weatherData);
        // if(!this.props.weatherData){
        //     return <div>No initial state.. Please type any city of your choice </div>
        // }
        // forEach will not return a new array only map does
        return(
           <table className="table table-hover">
            <thead>
            <tr>
             <th> City </th>
             <th> Temperature </th>
             <th> Humidity </th>
             <th> Pressure </th>
            </tr>
            </thead>
            <tbody>
              {this.props.weatherData.map(this.renderCities)}
            </tbody>
           </table>
        );
    }
}

// THIS FUNCTION should be outside the class
function mapStateToProps(state) {
    // you have to return the state
    return { weatherData: state.weather }
};

export default connect(mapStateToProps)(ListCities);