import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let postsElements = props.posts.map((item) => {
        return <Post message={item.message} avatarUrl={item.avatarUrl} likes={item.likes} key={item.id} />
    })

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator())

    }

    let onPostChange = () => {
        // Получаем отредактированные данные из value элемента
        let text = newPostElement.current.value;
        console.log(text);
        // Текст из value отправляем в state
        // props.updateNewPostText(text);
        let action = updateNewPostActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    {/* Получаем данные из state, и записываем их в value */}
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;