import React from 'react'
import './Cards.css'
import CardItem from './CardItem';
import milan from '../images/card-milan.jpeg';
import ibiza from '../images/card-beach.jpeg';
import tokyo from '../images/card-tokyo.jpeg';
import capetown from '../images/card-southafrica.jpeg';

function Cards() {
    

    return (
        <div className="cards">
            <h1>Top 4 Places to Visit in 2021!</h1>
            <div className="card-container">
                <div className="card-wrapper">
                    <ul className="card-items">
                        <CardItem
                        src={ibiza}
                        text="This is one of the most relaxing beaches to visit"
                        label="Ibiza"
                        path="/ibiza"
                        />
                        <CardItem
                        src={milan}
                        text="One of the most beautiful places on earth"
                        label="Milan"
                        path="/milan"
                        />
                    </ul>
                    <ul className="card-items">
                        <CardItem
                        src={tokyo}
                        text="This is one of the most relaxing beaches to visit"
                        label="Tokyo"
                        path="/tokyo"
                        />
                        <CardItem
                        src={capetown}
                        text="This is one of the most relaxing beaches to visit"
                        label="South Africa"
                        path="/capetown"
                        />
                    </ul>
                </div>
                <ul>

                </ul>
            </div>
        </div>
    )
}

export default Cards
