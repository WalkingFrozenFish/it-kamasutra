import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div>
            <h2 id={classes.title}>{props.header}</h2>
            <p className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam architecto nobis cumque vero atque exercitationem asperiores. Corporis, harum sint?</p>
        </div >
    );
}

export default Dialogs;