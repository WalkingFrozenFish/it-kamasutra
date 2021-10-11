import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={`${classes.dialog} ${classes.active}`}>Name 1</div>
                <div className={classes.dialog}>Name 2</div>
                <div className={classes.dialog}>Name 3</div>
                <div className={classes.dialog}>Name 4</div>
                <div className={classes.dialog}>Name 5</div>
                <div className={classes.dialog}>Name 6</div>
                <div className={classes.dialog}>Name 7</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Lorem ipsum dolor sit amet.</div>
                <div className={classes.message}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                <div className={classes.message}>Lorem, ipsum dolor.</div>
            </div>
        </div >
    );
}

export default Dialogs;