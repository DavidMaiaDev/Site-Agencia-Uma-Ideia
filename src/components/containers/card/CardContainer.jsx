import React from 'react'
import './CardContainerStyles.css'
import Card from '../../card/Card'

import data from './cardsData.json'

const CardContainer = () => {
    return (
        <div className='card-container'>
            <div className="background-shape">
                <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
                </svg>
            </div>
            {data.map((item, index) => (
                <Card key={index}
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                />
            ))}
        </div>
    )
}

export default CardContainer