import React from 'react'

function Description({subTitle, image, subText}) {
    console.log(subText)
    return (
        <div className="sub__info__wrapper">
            <h3>{subTitle}</h3>
            <img src={image} alt="Breakfast at Ibiza" className="description__img"/>
            <ul>
                {subText.map((element, i) =>{
                    return <li key={i}> {element}</li>
                })}
            </ul>
        </div>
    )
}

export default Description
