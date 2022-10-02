import { useContext, useState } from "react";
import User from "../User/User";
import { UserContext } from "../util";
import styles from "./AddComment.module.css";

export default function AddComment({ replyTo, onComment }) {
  const [comment, setComment] = useState("");
  const currentUser = useContext(UserContext);

  return (
    <div className={styles["comment-bubble"]}>
      <User className={styles.user} src={currentUser.image.png}></User>
      <textarea
        className={styles["input-box"]}
        placeholder="Add a comment..."
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      ></textarea>
      <button
        className={styles.btn}
        onClick={() => {
          onComment({
            id: Math.floor(Math.random() * 10000),
            content: comment,
            createdAt: "now",
            score: 0,
            user: currentUser,
            replies: [],
          });
          setComment("");
        }}
      >
        {replyTo ? "REPLY" : "SEND"}{" "}
      </button>
    </div>
  );
}
