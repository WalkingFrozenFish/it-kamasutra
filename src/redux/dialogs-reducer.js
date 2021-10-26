const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            // Создаем новый объект сообщения
            let newMessage = {
                id: 5,
                // Присваиваем обновляемый текст сообщения из state
                // message: this._state.dialogsPage.newMessageText,
                message: state.newMessageText,
            }
            // Добавляем в state новый объект сообщения
            state.messages.push(newMessage);
            // При добавлении текста затирать текст в поле ввода
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            // Записываем в state обновленное значение newText
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer;