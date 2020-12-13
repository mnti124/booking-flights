import React from 'react'
import Description from '../Description';
import {Fade} from 'react-slideshow-image';
import palace from '../../images/palace.jpeg';
import tokyo_restaurant from '../../images/tokyo_restaurant.jpg';
import temple from '../../images/tokyo_temple.jpeg';

function Tokyo() {
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
                <h1>Welcome to Tokyo</h1>
                <hr/>
                <div className="slider">
                    <Fade {...fadeProperties}>
                        <div className="each-slide">
                            <div className="slide-img">
                                <img src="https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Tokyo Building"/>
                            </div>
                        </div>
                        
                        <div className="each-slide">
                            <div className="slide-img">
                                <img src="https://images.pexels.com/photos/3380920/pexels-photo-3380920.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Crowded City"/>
                            </div>
                        </div>

                        <div className="each-slide">
                            <div className="slide-img">
                                <img src="https://images.pexels.com/photos/2389171/pexels-photo-2389171.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Bridge" />
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
                    subTitle="Tokyo Restaurant"
                    image={tokyo_restaurant}
                    subText={subText}

                    />
                    <Description
                    subTitle="Popular Buildings"
                    image={palace}
                    subText={subText}

                    />
                    <Description
                    subTitle="Temple"
                    image={temple}
                    subText={subText}
                    width={"200px"}
                    />
                </div>

            </div>
        </div>
    )
}

export default Tokyo
