import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
    return (
        <div className={`${classes.dialog}`}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Name 1" id="1" />
                <DialogItem name="Name 2" id="2" />
                <DialogItem name="Name 3" id="3" />
                <DialogItem name="Name 4" id="4" />
                <DialogItem name="Name 5" id="5" />
                <DialogItem name="Name 6" id="6" />
                <DialogItem name="Name 7" id="7" />
            </div>
            <div className={classes.messages}>
                <Message message="Hi" />
                <Message message="Lorem ipsum dolor sit amet." />
                <Message message="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
                <Message message="Lorem, ipsum dolor." />
            </div>
        </div >
    );
}

export default Dialogs;