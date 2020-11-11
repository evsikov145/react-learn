import logo from "../../images/logo.svg";
import classes from './Header.module.css'
import React from "react";

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src={logo} alt=""/>
            <div className={classes.title}>
                IT-KAMASUTRA
            </div>
        </header>
    )
}

export default  Header;