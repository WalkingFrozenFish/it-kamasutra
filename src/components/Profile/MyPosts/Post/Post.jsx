import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.avatarUrl} alt="Avatar" />
            <p>{props.message}</p>
            <p>Likes {props.likes}</p>
        </div>
    );
}

export default Post;