import styles from "./Comment.module.css";
import Score from "./../Score/Score";
import Reply from "./../Reply/Reply";
import User from "./../User/User";
import useMediaQuery from "../useMediaQuery";
import AddComment from "../AddComment/AddComment";

export function Comment({
  user,
  score,
  id,
  text,
  replies,
  increment,
  decrement,
}) {
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
        {user}
        <div className={styles.text}>{text}</div>
        <Reply className={styles.reply}></Reply>
      </div>
      {replies?.map((reply) => {
        const user = (
          <User
            username={reply.user.username}
            src={reply.user.image.png}
          ></User>
        );

        const onReply = <AddComment></AddComment>;
        return (
          <Comment
            user={user}
            key={reply.id}
            id={reply.id}
            score={reply.score}
            increment={increment}
            decrement={decrement}
            text={reply.content}
            replies={reply.replies}
          ></Comment>
        );
      })}
    </div>
  );
}
