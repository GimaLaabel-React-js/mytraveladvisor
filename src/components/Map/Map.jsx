import React from 'react';
import GoogleMapReact from 'google-map-react';
import { BsFillGeoAltFill } from "react-icons/bs";

const Map = () => {

    const coordinates = {lat: 10, lng: 8}

    return (
        <div className="map" style={{height: '100vh', width: "100%"}}>
            <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyC7d4sB1jUvbplEUQKRL3FlUoPQ4Jh0cj8'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={6.0}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''} 
                >
            </GoogleMapReact>
        </div>
    )
}

export default Map;