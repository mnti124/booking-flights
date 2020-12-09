import React from 'react'


function FlightInfo({selectedCountry, payment,city, street1, name, iata, interpreted, price}) {
   
    return (
        <div className="flights__details">
           
               
            <h1 className="country">USA</h1>
            <i className="fas fa-arrows-alt-h"></i>
            <h1 className="country">{selectedCountry}</h1><span className="colon">:</span>
            
            {/* <div className="flights__details__address"><h3>Location:</h3>{street1} {city} {country}</div> */}
            <div className="flights__details__info">
                <span><i className="fas fa-arrow-right"></i><h3>Location:</h3><div className="flights__details__api__info"><span>{street1} {city} {selectedCountry}</span></div> </span>
                <span><i className="fas fa-arrow-right"></i><h3>Airline:</h3><div className="flights__details__api__info"><span>{name}</span></div></span>
                <span><i className="fas fa-arrow-right"></i><h3>Airport Code:</h3><div className="flights__details__api__info"><span>{iata}</span></div></span>
                <span><i className="fas fa-arrow-right"></i><h3>Date:</h3><div className="flights__details__api__info"><span>{interpreted}</span></div></span>
                <span><i className="fas fa-arrow-right"></i><h3>Price:</h3><div className="flights__details__api__info"><span>{price}</span></div></span>

                {/* <button className="flights__details__booknow" onClick={handleClick}>book now</button>
                {isClicked && <Payment />} */}
                {payment}
            </div>
            
        </div>
    )
}

export default FlightInfo
