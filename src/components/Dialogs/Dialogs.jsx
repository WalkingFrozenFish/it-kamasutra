import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map((item) => {
        return <DialogItem name={item.name} id={item.id} key={item.id} />
    })

    let messagesElements = props.messages.map((item) => {
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