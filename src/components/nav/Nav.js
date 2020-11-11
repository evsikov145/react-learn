import classes from './Nav.module.css'
import React from "react";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <a className={classes.link} href="#">Главная</a>
            <a className={classes.link} href="#">Обо мне</a>
            <a className={classes.link} href="#">Галерея</a>
        </nav>
    )
}

export default Nav;