// Импорт модуля css со стилями
import classes from "./DialogItem.module.css";
// Импортируем компонент из библиотеки react-router-dom
import { NavLink } from "react-router-dom";

// Создаем компонент DialogItem, передаем props
const DialogItem = (props) => {
    // Возвращаем разметку jsx
    return (
        <div className={`${classes.dialog}`}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
}

// Экспортируем компонент DialogItem
export default DialogItem;