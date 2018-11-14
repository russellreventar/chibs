import React from 'react';

const Card = ({
  type,
  location,
  address,
  number,
  hours
}) => {
  return (
    <div className={`ch-card ch-card--${type}`}>
      <div className="info">
        <h3>{location}</h3>
        <div>{address}</div>
        <div>{number}</div>
        <div>{hours}</div>
      </div>
    </div>
  )
}

export default Card;