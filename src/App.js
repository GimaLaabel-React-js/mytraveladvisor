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
    // const [bounds, setBounds] = React.useState({
    //     sw: {lat: 11.847676, lng: 109.095887}, 
    //     ne: {lat: 12.838442, lng: 109.149359}
    // })
    
    console.log(bounds)
    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords : {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude})
        })
        // console.log(coordinates, bounds)
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
                <List places= {places}/>
                <Map 
                    setCoordinates = {setCoordinates}   
                    setBounds = {setBounds}
                    coordinates = {coordinates} 
                />
            </div>
        </div>
    )
}

export default App;

// bl_latitude: '11.847676',
// tr_latitude: '12.838442',
// bl_longitude: '109.095887',
// tr_longitude: '109.149359',