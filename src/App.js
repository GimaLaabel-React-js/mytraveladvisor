import React from 'react'
import Header from './components/Header/Header.jsx'
import List from './components/List/List.jsx'
import Map from './components/Map/Map.jsx'
import PlaceDetails from './components/PlaceDetails/PlaceDetails.jsx'
import { getPlacesData } from './api/index.js'

const App = () => {
    const [places, setPlaces] = React.useState([])
    const [coordinates, setCoordinates] = React.useState({})
    const [bounds, setBounds] = React.useState({})

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords : {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude})
        })
        console.log(coordinates, bounds)
    }, [])

    React.useEffect(() => {
        getPlacesData(bounds.sw, bounds.ne) 
        .then((data) => {
            console.log(data)
            setPlaces(data)
        })
        console.log(coordinates, bounds)
    }, [coordinates, bounds])

    return (        
        <div> 
            <Header />
            <div className="main-section">
                <List />
                <Map 
                    setCordinates = {setCoordinates}   
                    setBounds = {setBounds}
                    coordinates = {coordinates} 
                />
            </div>
        </div>
    )
}

export default App;