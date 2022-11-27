import React from 'react'

const PlaceDetails = ({place}) => {

    return (
        <div className="card">
            <div className="card-title">
                <img src={place.photo ? place.photo.images.large.url: "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"} width="100%" />
                <h5>{place.name}</h5>
            </div>
            <div className="card-content">
                <div className="card-price">
                    <h5>Price: </h5>
                    <h5>{place.price}</h5>
                </div>
                <div className="card-price">
                    <h5>Ranking</h5>
                    <h6>{place.ranking}</h6>
                </div>
                {/* {place?.awards?.map((award) => (
                    <div>
                        
                    </div>
                ))} */}
            </div>

        </div>
    ) 
}

export default PlaceDetails;