import React from 'react'

function Services() {
    return (
        <div className="services">
            <div className="services__container">
                <h1 className="services__container__title">What We Do?</h1>
                <p className="services__container__description">
                    The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, 
                    page, etc.) that doesn't distract from the layout. A practice not without controversy, laying 
                    out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.

                    The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets,
                    and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the 
                    web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative 
                    history of lorem ipsum.
                </p>
                <div className="services__container__list">
                    <h2>Why Travel with Us?</h2>
                    <ul>
                        <li>Best Reviewed Places</li>
                        <li>100% Description Accuracy</li>
                        <li>20% Discount Off your 1st 2 Flights</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services
