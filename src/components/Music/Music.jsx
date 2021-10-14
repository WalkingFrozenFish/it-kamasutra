// Импорт модуля css со стилями
import classes from "./Music.module.css";

// Создаем компонент Music, передаем props
const Music = (props) => {
    // Возвращаем разметку jsx
    return (
        <div>
            <h2>Some music page</h2>
        </div>
    );
}

// Экспортируем компонент Music
export default Music;