import React from 'react';
import './Card.css';
const Card = props => {
  return <div className={`${props.class} card`}>{props.children}</div>;
};

export default Card;
