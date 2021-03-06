import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={classes.banner} src="https://images.unsplash.com/photo-1632213702844-1e0615781374?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80" alt="baner" />
            </div>

            <div className={classes.descriptionBlock}>
                Avatar, description
            </div>
        </div>
    );
}

export default ProfileInfo;