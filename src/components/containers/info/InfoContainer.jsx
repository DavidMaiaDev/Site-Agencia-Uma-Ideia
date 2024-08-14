import React from 'react'
import Button from '../../button/Button'
import './InfoContainerStyles.css'

const InfoContainer = (props) => {
    return (
        <div className='info-container'>
            <h2>{props.sessionTitle}</h2>
            <p>{props.sessionText}</p>

            <div className={props.cName}>
                <div className='info-text'>
                    <h2>{props.textTitle}</h2>
                    <p>{props.textContent}</p>
                    <Button
                        buttonCName='button info'
                        buttonText={props.buttonText}
                        buttonIcon={props.buttonIcon}
                    />
                </div>
                <div className='info-image'>
                    <img src={props.img1} alt='' />
                    <img src={props.img2} alt='' />
                </div>
            </div>
        </div>
    )
}

export default InfoContainer