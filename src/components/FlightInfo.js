import React from 'react'


function FlightInfo({country, payment}) {
    
    return (
        <div className="flights__details">
           
               
            <h1 className="country">USA</h1>
            <i className="fas fa-arrows-alt-h"></i>
            <h1 className="country">{country}</h1><span className="colon">:</span>
            

            <div className="flights__details__info">
                <span><i className="fas fa-arrow-right"></i><h3>Location:</h3></span>
                <span><i className="fas fa-arrow-right"></i><h3>Airline:</h3></span>
                <span><i className="fas fa-arrow-right"></i><h3>Airport Code:</h3></span>
                <span><i className="fas fa-arrow-right"></i><h3>Date:</h3></span>
                <span><i className="fas fa-arrow-right"></i><h3>Price:</h3></span>

                {/* <button className="flights__details__booknow" onClick={handleClick}>book now</button>
                {isClicked && <Payment />} */}
                {payment}
            </div>
            
        </div>
    )
}

export default FlightInfo
