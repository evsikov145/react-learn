
import classes from './Header.module.css'
import React from "react";

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="/static/images/logo.svg" alt=""/>
            <div className={classes.title}>
                Social Network
            </div>
        </header>
    )
}

export default  Header;