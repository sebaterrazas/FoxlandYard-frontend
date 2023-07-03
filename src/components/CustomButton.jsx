import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/CustomButton.css"

const CustomButton = ({ children, type='primary', mode='outlined', href, onClick }) => {
    const navigate = useNavigate();

    const finalOnClick = () => {
        if (onClick) {
            onClick();
        }
        if (href) {
            navigate(href);
        } 
    }

    return (
        <a className={`custom-button ${type} ${mode}`} onClick={finalOnClick}>
        {children}
        </a>
    );
};
  

export default CustomButton;