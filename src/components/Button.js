import React from 'react'
import './Button.css'

const STYLE = ['btn--outline', 'btn--primary'];
const SIZE = ['btn--medium', 'btn--large'];


function Button({
    children,
    buttonStyle,
    buttonSize,
    handleLogout,
}) {
    // to={user? "/" :"/login" || path} 
    const checkButtonStyle = STYLE.includes(buttonStyle)? buttonStyle : STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize)? buttonStyle : SIZE[0];
    return (
        
        <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={handleLogout}
        >
            {children}
        </button>
        
    )
}

export default Button
