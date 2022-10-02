import styles from "./Comment.module.css";
import Score from "./../Score/Score";
import Reply from "./../Reply/Reply";
import User from "./../User/User";
import useMediaQuery from "../useMediaQuery";
import AddComment from "../AddComment/AddComment";
import { useState } from "react";

export function Comment({
  user,
  score,
  id,
  text,
  replies,
  increment,
  decrement,
}) {
  const [isReplyVisible, setIsReplyVisible] = useState(false);
  const isMobile = useMediaQuery("(max-width: 500px)");

  return (
    <div className={styles["comment-section"]}>
      <div className={styles.bubble}>
        <Score
          className={styles.score}
          score={score}
          horizontal={isMobile}
          increment={() => increment(id)}
          decrement={() => decrement(id)}
        ></Score>
        <User username={user.username} src={user.image.png}></User>
        <div className={styles.text}>{text}</div>
        <Reply className={styles.reply}></Reply>
      </div>
      {isReplyVisible && <AddComment replyTo={user}></AddComment>}
      {replies?.map((reply) => (
        <Comment
          user={reply.user}
          key={reply.id}
          id={reply.id}
          score={reply.score}
          increment={increment}
          decrement={decrement}
          text={reply.content}
          replies={reply.replies}
        ></Comment>
      ))}
    </div>
  );
}
