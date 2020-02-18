import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends Component {
    render() {
        const mapStyles= {
            width: "400px",
            height: "400px"
        }
        
        return(
            <h1>Map here</h1>
            // <Map
            // zoom={16} 
            // google={this.props.google}
            // style={mapStyles}
            // initialCenter={{ lat: 38.107901, lng: -103.866247 }}
            // >
            //     <Marker position={{ lat: 38.107901, lng: -103.866247 }} />
            // </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY
})(MapContainer);