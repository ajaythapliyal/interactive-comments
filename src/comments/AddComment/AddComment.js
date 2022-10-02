import User from "../User/User";
import styles from "./AddComment.module.css";

export default function AddComment({ user, replyTo }) {
  return (
    <div className={styles["comment-bubble"]}>
      <div className={styles.user}>{user}</div>
      <textarea
        className={styles["input-box"]}
        placeholder="Add a comment..."
      ></textarea>
      <button className={styles.btn}>{replyTo ? "REPLY" : "SEND"} </button>
    </div>
  );
}
