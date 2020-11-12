import classes from './Nav.module.css'
import React from "react";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <a className={classes.link} href="#">Profile</a>
            <a className={classes.link} href="#">Messages</a>
            <a className={classes.link} href="#">News</a>
            <a className={classes.link} href="#">Music</a>
            <a className={classes.link} href="#">Settings</a>
        </nav>
    )
}

export default Nav;