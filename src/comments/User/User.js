import Avatar from "../Avatar/Avatar";
import styles from "./User.module.css";

export default function User(props) {
  return (
    <div className={styles["user-container"]}>
      <Avatar src={props.user.src}></Avatar>
      <span className={styles.username}>{props.user.username}</span>
    </div>
  );
}
