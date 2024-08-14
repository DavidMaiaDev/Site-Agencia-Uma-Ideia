import { React, useEffect, useState } from 'react'
import ImageCard from '../../imagecard/ImageCard'
import Button from '../../button/Button'
import './PortfolioContainerStyles.css'

const PortfolioContainer = (props) => {
  const [checked, setChecked] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setImages(checked ? props.graphicDesignImages : props.photographImages)
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [checked])

  return (
    <div className='portfolio-container'>
      <h2>{props.portfolioTitle}</h2>
      <p>{props.portfolioDescription}</p>

      <div className='switch-container'>
        <h3>{props.photographyTitle}</h3>
        <label className="switch">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span className="slider round"></span>
        </label>
        <h3>{props.graphicDesignTitle}</h3>
      </div>

      <div className={`items-container ${checked ? 'active' : ''}`}>
        <div className={`clip-layer ${checked ? 'active' : ''}`}></div>
        {images.map((image, index) => (
          <ImageCard key={index} cName={'image-card'} src={image} alt={`Portfolio Image ${index + 1}`} />
        ))}
      </div>

      <h4>{props.moreTitle}</h4>
      <p>{props.moreDescription}</p>

      <div className='portfolio-buttons'>
        <Button
          url={props.instagramUrl}
          buttonCName='button info'
          buttonText={props.instagramButtonText}
          buttonIcon='fa-brands fa-instagram'
        />
        <Button
          url={props.photographyUrl}
          buttonCName='button info'
          buttonText={props.photographyButtonText}
          buttonIcon='fa-solid fa-file-pdf'
        />
        <Button
          url={props.graphicDesignUrl}
          buttonCName='button info'
          buttonText={props.graphicDesignButtonText}
          buttonIcon='fa-solid fa-file-pdf'
        />
      </div>
    </div>
  )
}

export default PortfolioContainer
