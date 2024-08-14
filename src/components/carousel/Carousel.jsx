import React, { useState } from 'react';
import './CarouselStyles.css';

import logo from '../../assets/imgs/logo.png';

const Carousel = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPreviousSlide = () => {
        const index = (currentIndex - 1 + props.images.length) % props.images.length;
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        const index = (currentIndex + 1) % props.images.length;
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            <div className="slider-container">
                {props.images.map((image, index) => (
                    <div className="slider-item" key={index} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        <img
                            className="slide"
                            src={image}
                            alt={`Slide ${index}`}
                        />
                        <div className='slider-text'>
                            <img src={logo} alt="Logo"></img>
                            <p>
                                A ideia certa{' '}
                                <span>{props.sliderTexts[index]}</span>, faz toda a diferença.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="control prev" onClick={goToPreviousSlide}>&lt;</button>
            <button className="control next" onClick={goToNextSlide}>&gt;</button>
            <div className="indicators">
                {props.images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
