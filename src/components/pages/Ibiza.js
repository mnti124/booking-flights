import React from 'react'
import Description from './../Description';
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './../../App'
import coast from '../../images/coast.jpeg';
import frontBeach from '../../images/front-beach.jpeg';
import sea from '../../images/sea.jpeg';
import event from '../../images/event.jpeg';
import beach from '../../images/beach1.jpeg';
import breakfast from '../../images/breakfast1.jpeg';
function Ibiza() {
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
        <div className="ibiza__container">
            <div className="ibiza__header">
                {/* Image Slider Component */}
                {/* Little text about ibiza */}
                <h1>Welcome to Ibiza</h1>
                <hr/>
                <div className="slider">
                    <Fade {...fadeProperties}>
                        <div className="each-slide">
                            <div className="slide-img">
                                <img src={coast}/>
                            </div>
                        </div>
                        
                        <div className="each-slide">
                            <div className="slide-img">
                                <img src={frontBeach}/>
                            </div>
                        </div>

                        <div className="each-slide">
                            <div className="slide-img">
                                <img src={sea} />
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
            <div className="ibiza__main__wrapper">
                <h2>What's included?</h2>
                <div className="ibiza__main__description">
                    
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
                    image={event}
                    subText={subText}
                    width={"200px"}
                    />
                </div>

            </div>
        </div>
    )
}

export default Ibiza
