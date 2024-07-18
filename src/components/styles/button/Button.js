import React from 'react';
import './Button.css';

const StylishButton = ({ children, onClick, type = 'Button' }) => {
    return (
        <button className="Button" onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default StylishButton;