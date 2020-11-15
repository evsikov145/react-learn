import classes from './Nav.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <NavLink className={classes.link} activeClassName={classes.active} to="/profile">Profile</NavLink>
            <NavLink className={classes.link} activeClassName={classes.active} to="/dialogs">Messages</NavLink>
            <NavLink className={classes.link} activeClassName={classes.active} to="/news">News</NavLink>
            <NavLink className={classes.link} activeClassName={classes.active} to="/music">Music</NavLink>
            <NavLink className={classes.link} activeClassName={classes.active} to="/settings">Settings</NavLink>
        </nav>
    )
}

export default Nav;