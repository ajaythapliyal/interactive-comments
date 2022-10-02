import Avatar from "../Avatar/Avatar";
import styles from "./User.module.css";

export default function User({ src, username, className }) {
  return (
    <div
      className={`${styles["user-container"]} ${className ? className : ""}`}
    >
      <Avatar src={src}></Avatar>
      {username && <span className={styles.username}>{username}</span>}
    </div>
  );
}
