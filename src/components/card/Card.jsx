import React from 'react'
import './CardStyles.css'

const Card = (props) => {
    return (
        <div className='card'>
            <i className={props.icon}></i>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Card