import classes from './Posts.module.css'
import Post from "./post/Post";
import React from "react";

const Posts = () => {
    return (
        <div className={classes.posts}>
            <Post message="Hi, how are you?" like='20'/>
            <Post message="It's my first project" like='37'/>
        </div>
    )
}

export default Posts;