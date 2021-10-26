import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, likes: 15, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, a.", avatarUrl: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80" },
                { id: 2, likes: 10, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas provident soluta voluptates culpa autem est!", avatarUrl: "https://images.unsplash.com/photo-1633824911018-519ad10f2b69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" },
                { id: 3, likes: 21, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas provident soluta.", avatarUrl: "https://images.unsplash.com/photo-1634020016130-ab5eca714e69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80" },
            ],
            newPostText: "Some text"
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Name 1" },
                { id: 2, name: "Name 2" },
                { id: 3, name: "Name 3" },
                { id: 4, name: "Name 4" },
                { id: 5, name: "Name 5" },
                { id: 6, name: "Name 6" },
                { id: 7, name: "Name 7" },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Lorem ipsum dolor sit amet." },
                { id: 3, message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." },
                { id: 4, message: "Lorem, ipsum dolor." },
            ],
            newMessageText: "Some text",
        },
        sidebar: {
            friends: [
                { name: "Name 1", avatarUrl: "https://images.unsplash.com/photo-1634120882716-1397a555457f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" },
                { name: "Name 2", avatarUrl: "https://images.unsplash.com/photo-1634155119874-cab5d0665482?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80" },
                { name: "Name 3", avatarUrl: "https://images.unsplash.com/photo-1634148207567-8bca0dc4c6bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" },
            ],
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        // Эта функция будет переопределена на функцию коллбек из subscribe
        console.log("render");
    },

    subscribe(observer) {
        // Коллбеком передаем функцию по рендеру приложения
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}



export default store;