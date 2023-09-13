import React, { useState} from "react";
import './Header.css';
import Menu from "../Menu/Menu";
import Search from "../Search/Search";
import Button from "../Button/Button";

function Header () {
    return (
        <header className="header">
            <div className="container-menu">
                <img className="logo" src="logobranca.png" alt="logo"/>
                
            </div>
            <div className="container-button">
                <Menu />
                <Search />
                <Button />
            </div>
        </header>
    );
}

export default Header;