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
    let dialogs = [
        { id: 1, name: "Name 1" },
        { id: 2, name: "Name 2" },
        { id: 3, name: "Name 3" },
        { id: 4, name: "Name 4" },
        { id: 5, name: "Name 5" },
        { id: 6, name: "Name 6" },
        { id: 7, name: "Name 7" },
    ]

    let messages = [
        { id: 1, message: "Hi" },
        { id: 2, message: "Lorem ipsum dolor sit amet." },
        { id: 3, message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." },
        { id: 4, message: "Lorem, ipsum dolor." },
    ]

    let dialogsElements = dialogs.map((item) => {
        return <DialogItem name={item.name} id={item.id} key={item.id} />
    })

    let messagesElements = messages.map((item) => {
        return <Message message={item.message} key={item.id} />
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div >
    );
}

export default Dialogs;