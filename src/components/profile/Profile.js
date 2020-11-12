import React from "react";
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <section className={classes.profile}>
            <div className={classes.banner}>
                <img src="/static/images/profile-bg.jpg" alt=""/>
            </div>
            <div className={classes.info}>
                <div className={classes.avatar}>
                    <img src="/static/images/avatar.svg" alt=""/>
                </div>
                <div className={classes.desc}>
                    <h2>Evsikov O.</h2>
                    <p>Date of Birth:<span>17.08.94</span></p>
                    <p>City:<span>Tula</span></p>
                    <p>Education:<span>TulGU</span></p>
                    <p>Web-site:<span>https://evsikov.online</span></p>
                </div>
            </div>
            <div className={classes.form}>
                <h2>My posts</h2>
                <input type="text" placeholder="your news..."/>
                <button>Send</button>
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    <div className={classes.pic}>
                        <img src="/static/images/avatar.svg" alt=""/>
                    </div>
                    <p>Wassssuuuuup!</p>
                </div>
            </div>

        </section>
    )
}

export default Profile;