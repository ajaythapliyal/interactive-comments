import Avatar from "../Avatar/Avatar";
import styles from "./User.module.css";

export default function User({ src, username }) {
  return (
    <div className={styles["user-container"]}>
      <Avatar src={src}></Avatar>
      {username && <span className={styles.username}>{username}</span>}
    </div>
  );
}
