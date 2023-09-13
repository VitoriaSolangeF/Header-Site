import React, { useState} from "react";
import './Header.css';
import Menu from "../Menu/Menu";

function Header () {
    return (
        <header className="header">
            <div className="container-menu">
                <img className="logo" src="logobranca.png" alt="logo"/>
            </div>
            <div className="container-button">
                <Menu />
            </div>
        </header>
    );
}

export default Header;