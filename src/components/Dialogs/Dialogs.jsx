// Импорт модуля css со стилями
import classes from "./Dialogs.module.css";
// Импорт модулей с компонентами
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


// Создаем компонент Dialogs, передаем props
const Dialogs = (props) => {
    // Создаем новый массив с обработанными значениями из объекта props
    let dialogsElements = props.state.dialogs.map((item) => {
        // Возвращаем новый компонент, с данными из массива
        return <DialogItem name={item.name} id={item.id} key={item.id} />
    })
    // Создаем новый массив с обработанными значениями из объекта props
    let messagesElements = props.state.messages.map((item) => {
        // Возвращаем новый компонент, с данными из массива
        return <Message message={item.message} key={item.id} />
    })

    // Создаем ссылку на элемент
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        // Получаем новое значение value из поля ввода
        let text = newMessageElement.current.value;
        // Отправляем его в state
        props.updateNewMessageText(text);
    }

    // Возвращаем разметку jsx
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {/* Отрисовываем массив с обработанными данными */}
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {/* Отрисовываем массив с обработанными данными */}
                {messagesElements}

                {/* Присваиваем ссылку элементу */}
                <textarea ref={newMessageElement} value={props.state.newMessageText} onChange={onMessageChange} cols="30" rows="10" />
                <button onClick={addMessage}>Click</button>

            </div>
        </div >
    );
}

// Экспортируем компонент Dialogs
export default Dialogs;