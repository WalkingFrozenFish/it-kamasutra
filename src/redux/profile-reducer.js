const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, likes: 15, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, a.", avatarUrl: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80" },
        { id: 2, likes: 10, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas provident soluta voluptates culpa autem est!", avatarUrl: "https://images.unsplash.com/photo-1633824911018-519ad10f2b69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" },
        { id: 3, likes: 21, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas provident soluta.", avatarUrl: "https://images.unsplash.com/photo-1634020016130-ab5eca714e69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80" },
    ],
    newPostText: "Some text"
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                // Мы получаем данные из поля ввода
                // message: this._state.profilePage.newPostText,
                message: state.newPostText,
                likes: 0,
                avatarUrl: "#",
            };
            // Добавляем в объект данные из поля ввода
            state.posts.push(newPost);
            // Затираем данные в поле ввода
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            // Каждый символ, каждое значение мы помещаем в state
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export default profileReducer;