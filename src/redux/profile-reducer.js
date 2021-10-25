const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {

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