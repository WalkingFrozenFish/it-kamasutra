import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
    return (
        <div>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    {/* Позволяет менять URL в адресной строке */}
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/somelink" activeClassName={classes.active}>Some link</NavLink>
                </div>
            </nav>

            {/* <Friends state={props.state.friends} /> */}
        </div>

    );
}

export default Navbar;