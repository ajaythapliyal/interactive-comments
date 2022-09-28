import styles from "./Comment.module.css";
import Score from "./../Score/Score";
import Reply from "./../Reply/Reply";
import User from "./../User/User";
import useMediaQuery from "../useMediaQuery";

export function Comment(props) {
  const isMobile = useMediaQuery("(max-width: 500px)");
  return (
    <div className={styles["comment-section"]}>
      <div className={styles.bubble}>
        <Score
          className={styles.score}
          score={props.score}
          horizontal={isMobile}
          increment={() => props.increment(props.id)}
          decrement={() => props.decrement(props.id)}
        ></Score>
        <User username={props.username} src={props.src}></User>
        <div className={styles.text}>{props.text}</div>
        <Reply className={styles.reply}></Reply>
      </div>
      {props.replies?.map((reply) => (
        <Comment
          key={reply.id}
          id={reply.id}
          score={reply.score}
          increment={props.increment}
          decrement={props.decrement}
          username={reply.user.username}
          src={reply.user.image.png}
          text={reply.content}
          replies={reply.replies}
        ></Comment>
      ))}
    </div>
  );
}
