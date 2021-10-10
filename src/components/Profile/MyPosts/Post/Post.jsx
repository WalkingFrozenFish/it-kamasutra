import classes from "./Post.module.css";

const Post = (props) => {
    console.log(props)
    return (
        <div className={classes.item}>
            <img src={props.avatarUrl} alt="Avatar" />
            {/* <img src="https://w7.pngwing.com/pngs/336/946/png-transparent-avatar-user-medicine-surgery-patient-avatar-face-heroes-head.png" alt="Avatar" /> */}
            {/* Some post 1 */}
            <p>{props.message}</p>
        </div>
    );
}

export default Post;