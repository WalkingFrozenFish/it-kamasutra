import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map((item) => {
        return <Post message={item.message} avatarUrl={item.avatarUrl} likes={item.likes} key={item.id} />
    })

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;