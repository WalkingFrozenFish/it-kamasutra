// Импорт модуля css со стилями
import classes from "./Header.module.css";

// Создаем компонент Header, передаем props
const Header = () => {
    // Возвращаем разметку jsx
    return (
        <header className={classes.header}>
            <img src="https://pbs.twimg.com/media/CJ1V7QKUAAAD2p3.png" alt="logo" />
        </header>
    );
}

// Экспортируем компонент Header
export default Header;