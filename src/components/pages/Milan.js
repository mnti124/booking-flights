import React from 'react'
import Description from '../Description';
import {Fade} from 'react-slideshow-image';
import pasta from '../../images/pasta.jpeg';
import rivadelgarde from '../../images/rivadelgarde.jpeg';
import sculture from '../../images/sculture.jpeg';

function Milan() {
    const fadeProperties= {
        duration: 3000,
        transitionDuration: 550,
        infinite: true,
        indicators: true
    }


    const subText = [
        'Free delicious breakfast',
        'Food delivered at your door',
        'Broad menu to choose from'
    ]

    return (
        <div className="city__container">
        <div className="city__header">
            {/* Image Slider Component */}
            {/* Little text about ibiza */}
            <h1>Welcome to Milano</h1>
            <hr/>
            <div className="slider">
                <Fade {...fadeProperties}>
                    <div className="each-slide">
                        <div className="slide-img">
                            <img src="https://images.pexels.com/photos/5360472/pexels-photo-5360472.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Milan Town"/>
                        </div>
                    </div>
                    
                    <div className="each-slide">
                        <div className="slide-img">
                            <img src="https://images.pexels.com/photos/4329937/pexels-photo-4329937.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Sculputere"/>
                        </div>
                    </div>

                    <div className="each-slide">
                        <div className="slide-img">
                            <img src="https://images.pexels.com/photos/5273117/pexels-photo-5273117.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Cathedral" />
                        </div>
                    </div>

                </Fade>
            </div>
            
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book.
            </p>
        </div>
        <div className="city__main__wrapper">
            <h2>What's included?</h2>
            <div className="city__main__description">
                
                <Description
                subTitle="Delicious Lunch"
                image={pasta}
                subText={subText}

                />
                <Description
                subTitle="Ride on Boat"
                image={rivadelgarde}
                subText={subText}

                />
                <Description
                subTitle="Design"
                image={sculture}
                subText={subText}
                width={"200px"}
                />
            </div>

        </div>
    </div>
    )
}

export default Milan
