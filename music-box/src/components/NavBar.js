import React from 'react'
import logo from '../assets/images/logo.png'
import avatar from '../assets/images/avatar.png'

export default function NavBar(){
    return (
        <nav>
            <div className="container">
                <img className="logo" src={logo} alt="Logo" />
                <img className="avatar" src={avatar} alt="Avatar" />
            </div>
        </nav>
    );
}