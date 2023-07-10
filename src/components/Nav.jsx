import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import simpLogo from '../img/logo.png'
import '../css/nav.css'
import Cookies from 'js-cookie'

const Nav = () => {


    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        if(Cookies.get('auth_token')){
            setIsLoggedIn(true);
        }
    }, [])

    const logout = () => {
        Cookies.remove("auth_token");
        setIsLoggedIn(false)
    }

  return (
    <header className="header-section clearfix">
        <div className="container-fluid">
            <NavLink to="/" className="site-logo">
                <img src={simpLogo} alt="SIMP Logo"/>
            </NavLink>
            <div className="responsive-bar"><i className="fa fa-bars"></i></div>
            {!isLoggedIn && (
                <NavLink to="/register" className="site-btn">Sign Up Free</NavLink>
            )}
            {isLoggedIn && (
                <NavLink to="/profile" className="site-btn">Profile</NavLink>
            )}
            {isLoggedIn && (
                <button className='site-btn' onClick={logout}>
                    Logout
                </button>
            )}
            <nav className="main-menu">
                <ul className="menu-list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/stocks">Stocks</NavLink></li>
                    <li><NavLink to="#">Privacy Policy</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Nav
