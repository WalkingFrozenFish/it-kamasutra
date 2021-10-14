// Импорт модуля css со стилями
import classes from "./Message.module.css";

// Создаем компонент Message, передаем props
const Message = (props) => {
    // Возвращаем разметку jsx
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

// Экспортируем компонент Message
export default Message;