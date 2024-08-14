import React from 'react'
import './ImageCardStyles.css'

const ImageCard = (props) => {
  return (
    <div className={`image-card ${props.cName}`}>
      <img src={props.src} alt={props.alt} />
      <div className={`shape ${props.color}`}>
        <div className='text-content'>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
