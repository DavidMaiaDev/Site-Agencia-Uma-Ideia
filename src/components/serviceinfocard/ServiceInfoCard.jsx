import React from 'react';
import './ServiceInfoCardStyles.css';

const ServiceInfoCard = (props) => {
  return (
    <div className={`service-info-card ${props.cName}`}>
      <i className={props.iconClass}></i>
      <h3>{props.title}</h3>
      <ul>
        {props.services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceInfoCard;
