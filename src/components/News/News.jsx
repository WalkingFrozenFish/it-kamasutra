// Импорт модуля css со стилями
import classes from "./News.module.css";

// Создаем компонент News, передаем props
const News = (props) => {
    // Возвращаем разметку jsx
    return (
        <div>
            <h2>Some news page</h2>
        </div>
    );
}

// Экспортируем компонент News
export default News;