import React from 'react'
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <div className="card-item">
                <Link to={props.path} className="card-link">
                    <figure className="card-item-pic-wrapper" data-label={props.label}>
                        <img src={props.src} alt="Nice Travel" className="card-image"/>
                    </figure>
                    <div className="card-container-text">
                        <p className="card-text">{props.text}</p>
                    </div>
                    
                </Link>
            
            </div>
        </>
    )
}

export default CardItem
