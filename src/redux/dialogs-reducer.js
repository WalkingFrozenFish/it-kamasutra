const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {

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