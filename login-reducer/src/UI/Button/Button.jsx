import React from 'react';
import classes from './Button.module.css';

const button = props => {
  return (
    <button
      type={props.type || 'button'}
      className={`${props.className} ${classes.button}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default button;
