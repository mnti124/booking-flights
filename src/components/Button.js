import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom';
import {useStateValue} from './../StateProvider';

const STYLE = ['btn--outline', 'btn--primary'];
const SIZE = ['btn--medium', 'btn--large'];

function Button({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    handleLogout
}) {

    const [{user}, dispatch] = useStateValue();
    const checkButtonStyle = STYLE.includes(buttonStyle)? buttonStyle : STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize)? buttonStyle : SIZE[0];
    return (
        <Link to={user? "/" :"/login"} className="btn-mobile">
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={handleLogout}
            >
                {children}
            </button>
        </Link>
    )
}

export default Button
