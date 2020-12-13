import React from 'react'
import Description from '../Description';
import {Fade} from 'react-slideshow-image';
import breakfast from '../../images/capebreakfast.jpeg';
import zoo from '../../images/capezoo.jpeg';
import beach from '../../images/capebeach.jpeg';
function CapeTown() {
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
                <h1>Welcome to Cape Town</h1>
                <hr/>
                <div className="slider">
                    <Fade {...fadeProperties}>
                        <div className="each-slide">
                            <div className="slide-img">
                                <img src="https://images.pexels.com/photos/963713/pexels-photo-963713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Cape Town Horizon"/>
                            </div>
                        </div>
                        
                        <div className="each-slide">
                            <div className="slide-img">
                                <img src="https://images.pexels.com/photos/3889918/pexels-photo-3889918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Zoo"/>
                            </div>
                        </div>

                        <div className="each-slide">
                            <div className="slide-img">
                                <img src="https://images.pexels.com/photos/625414/pexels-photo-625414.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Coast" />
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
                    subTitle="Breakfast"
                    image={breakfast}
                    subText={subText}

                    />
                    <Description
                    subTitle="Beach"
                    image={beach}
                    subText={subText}

                    />
                    <Description
                    subTitle="Events"
                    image={zoo}
                    subText={subText}
                    width={"200px"}
                    />
                </div>

            </div>
        </div>
    )
}

export default CapeTown
