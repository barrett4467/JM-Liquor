import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends Component {
    render() {
        return(
            <Map
            zoom={16} 
            google={this.props.google}
            initialCenter={{ lat: 38.107901, lng: -103.866247 }}
            >
                <Marker position={{ lat: 38.107901, lng: -103.866247 }} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyClGz1jHzwQ24DeNOA-ac03Z3Rj0JDLeuI"
})(MapContainer);