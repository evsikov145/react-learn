import classes from './Post.module.css'

const Post = ({message, like}) => {
    return (
        <div className={classes.item}>
            <div className={classes.pic}>
                <img src="/static/images/avatar.svg" alt=""/>
            </div>
            <div>
                <p>{message}</p>
                <p>Кол-во лайков: {like}</p>
            </div>

        </div>
    )
}

export default Post;