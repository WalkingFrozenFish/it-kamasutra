import classes from "./Item.module.css";

const Item = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.avatarUrl} alt={`Avatar: ${props.name}`} className={classes.avatar} />
            <p className={classes.name}>{props.name}</p>
        </div>
    );
}

export default Item;