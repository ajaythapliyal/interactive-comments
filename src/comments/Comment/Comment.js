import styles from "./Comment.module.css";
import Score from "./../Score/Score";
import Reply from "./../Reply/Reply";
import User from "./../User/User";
import useMediaQuery from "../useMediaQuery";
import { useState } from "react";

export function Comment(props) {
  const [score, setScore] = useState(props.score);
  const [replies, setReplies] = useState(props.replies);

  const isMobile = useMediaQuery("(max-width: 500px)");

  return (
    <div className={styles["comment-section"]}>
      <div className={styles.bubble}>
        <Score
          className={styles.score}
          score={score}
          horizontal={isMobile}
          increment={() => setScore(score + 1)}
          decrement={() => setScore(score - 1)}
        ></Score>
        <User username={props.username} src={props.src}></User>
        <div className={styles.text}>{props.text}</div>
        <Reply className={styles.reply}></Reply>
      </div>
      {replies?.map((reply) => (
        <Comment
          key={reply.id}
          score={reply.score}
          username={reply.user.username}
          src={reply.user.image.png}
          text={reply.content}
          replies={reply.replies}
        ></Comment>
      ))}
    </div>
  );
}
