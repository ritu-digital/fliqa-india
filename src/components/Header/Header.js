import React from 'react'
import "./Header.css"
import brandLogo from "../../Images/brand-logo.png";
import { NavLink } from 'react-router-dom';

const Header = ({loginButton}) => {
    
    return (
        <div className="header">
            <div className="header__logo">
                <img src={brandLogo} alt="fliqa India Logo" />
            </div>
            <nav className="header__menu">
            <ul>
            <li>
                <NavLink exact activeClassName="active" to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/about'>About Us</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/services'>Services</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/freelancers'>freelancers</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/blog'>blog</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/tutorial'>tutorial</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/contact'>contact us</NavLink>            
            </li>
            </ul>
            </nav>
            <div className="header__right">
            {loginButton}
            </div>
        
        </div>
    )
}

export default Header
