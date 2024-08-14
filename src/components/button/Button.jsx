import React from 'react'

import './ButtonStyles.css'

const Button = (props) => {
        return (
            <a href={props.url} className={props.buttonCName}>
                <span>{props.buttonText}</span>
                <i className={props.buttonIcon}></i>
            </a>
        )
}

export default Button