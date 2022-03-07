import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
 
  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};