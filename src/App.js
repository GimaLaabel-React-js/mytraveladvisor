import React from 'react'
import Header from './components/Header/Header.jsx'
import List from './components/List/List.jsx'
import Map from './components/Map/Map.jsx'
import PlaceDetails from './components/PlaceDetails/PlaceDetails.jsx'

const App = () => {
    return (        
        <div> 
            <Header />
            <div className="main-section">
                <List />
                <Map />
            </div>
        </div>
    )
}

export default App;