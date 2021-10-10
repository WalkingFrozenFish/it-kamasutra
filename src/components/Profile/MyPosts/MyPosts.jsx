import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let objName = [
        "name1", "name2", "name3", "name4", "name5",
    ];

    let objStatus = {
        online: "online",
        offline: "offline",
    }

    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, a." avatarUrl="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80" />
                <Post message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas provident soluta voluptates culpa autem est!" avatarUrl="https://images.unsplash.com/photo-1633824911018-519ad10f2b69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" />
            </div>

        </div>
    );
}

export default MyPosts;