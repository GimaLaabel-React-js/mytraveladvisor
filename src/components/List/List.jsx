import React from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = () => {
    const [type, setType] = React.useState("restaurants")
    const [rating, setRating] = React.useState('')

    const places = [
        {name: "Rumuigbo"},
        {name: "Woji"},
        {name: "Abuja"},
        {name: "Agip"},
        {name: "Trans Amadi"},
        {name: "Rumuola"}
    ]
    return (
        <div className="list">
            <h4>Restaurants, Hotels & Attractions around you</h4>
            <div className="list-div">
                <form>
                    <label htmlFor='type'>Type </label>
                    <select id="type" 
                            value={type}
                            onChange={(e) => (setType(e.target.value))}>
                        <option value="restaurants">Restaurants</option>
                        <option value="hotels">Hotels</option>
                        <option value="attractions">Attractions</option>
                    </select>
                </form>
                <form>
                    <label htmlFor='rating'>Rating </label>
                    <select id="rating" 
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}>
                        <option value={0}>All</option>
                        <option value={3}>Above 3.0</option>
                        <option value={4}>Above 4.0</option>
                        <option value={4.5}>Above 4.5</option>
                    </select>
                </form>                
            </div>
            <div>
                {places?.map((place) =>(
                    <PlaceDetails name={place.name} key={place.name} />
                ))}
            </div>
        </div>
    )
}

export default List;