import React, { Component } from 'react';


class GoogleMap extends Component {
    // this function will be called once Component is rendered
    componentDidMount() {
        new google.maps.Map(this.refs.map={}, {
            zoom: 12,
            centre: {
                // note with passing props you are geting props
                lat: this.props.lat,
                lon: this.props.lon,
            }
        });
    }


    render() {
        return <div ref = "maps" />;
    }


}


export default GoogleMap;