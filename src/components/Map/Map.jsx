import React from 'react';
import GoogleMapReact from 'google-map-react';
import { BsFillGeoAltFill } from "react-icons/bs";

const Map = ({setCoordinates, setBounds, coordinates }) => {
  
    return (
        <div className="map" style={{height: '100vh', width: "100%"}}>
            <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyC7d4sB1jUvbplEUQKRL3FlUoPQ4Jh0cj8'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14.0}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    console.log(e)
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                }}
                onChildClick={null} 
                >
            </GoogleMapReact>
        </div>
    )
}

export default Map;