import React from 'react';
import './PlanCardStyles.css';

const PlanCard = (props) => {
  return (
    <div className={`plan-card ${props.cName}`}>
      <h3>{props.title}</h3>
      {props.details.map((detail, index) => (
        <React.Fragment key={index}>
          {detail === "OU" ? (
            <div className='dash'>
              <span></span>
              <span className='special-line'>{detail}</span>
              <span></span>
            </div>
          ) : (
            <p>{detail}</p>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PlanCard;
