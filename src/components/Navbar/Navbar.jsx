import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                profile
                <a href="c">Profile</a>
            </div>
            <div className={classes.item}>
                messages
                <a href="c">Messages</a>
            </div>
            <div className={classes.item}>
                news
                <a href="c">News</a>
            </div>
            <div className={classes.item}>
                music
                <a href="c">Music</a>
            </div>
            <div className={classes.item}>
                settings
                <a href="c">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;