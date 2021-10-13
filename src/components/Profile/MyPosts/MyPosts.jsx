import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        { id: 1, likes: 15, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, a.", avatarUrl: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80" },
        { id: 2, likes: 10, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas provident soluta voluptates culpa autem est!", avatarUrl: "https://images.unsplash.com/photo-1633824911018-519ad10f2b69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" },
        { id: 3, likes: 21, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas provident soluta.", avatarUrl: "https://images.unsplash.com/photo-1634020016130-ab5eca714e69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80" },
    ]

    let postsElements = posts.map((item) => {
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