import classes from './Dialogs.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.section}>
            <div className={classes.contacts}>
                
                <NavLink to="/dialogs/1" className={classes.item} activeClassName={classes.active}>
                    Nastya
                </NavLink>
                
                <NavLink to="/dialogs/2" className={classes.item} activeClassName={classes.active}>
                    Victoria
                </NavLink>
               
                <NavLink to="/dialogs/3" className={classes.item} activeClassName={classes.active}>
                    Dima
                </NavLink>
                
            </div>

            <div className={classes.content}>
                
                <div className={classes.message}>
                    <div className={classes.avatar}>
                        <img src="/static/images/avatar.svg" alt=""/>
                        <p>Me</p>
                    </div>
                    <div className={classes.text}>
                        Hello! How are you?)
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Dialogs;