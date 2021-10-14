import classes from "./Friends.module.css";
import Item from "./Item/Item";

const Friends = (props) => {
    let friendsArray = props.state.map((item) => {
        return <Item avatarUrl={item.avatarUrl} name={item.name} key={item.name} />
    })

    return (
        <div className={classes.friendsBlock}>
            <h2 className={classes.title}>Friends</h2>
            <div className={classes.blockItems}>
                {friendsArray}
            </div>
        </div>
    );
}

export default Friends;