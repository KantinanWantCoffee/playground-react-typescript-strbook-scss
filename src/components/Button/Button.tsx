import React from 'react';
import './Button.scss';

type ButtonProps = {
    label: string;
    onClick?: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button