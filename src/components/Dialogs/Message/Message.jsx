// Импорт модуля css со стилями
import classes from "./Message.module.css";
import React from "react";

// Создаем компонент Message, передаем props
const Message = (props) => {



    // Возвращаем разметку jsx
    return (
        <div>
            <div className={classes.message}>{props.message}</div>

        </div>

    );
}

// Экспортируем компонент Message
export default Message;