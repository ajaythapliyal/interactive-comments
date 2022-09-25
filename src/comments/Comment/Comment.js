import styles from "./Comment.module.css";
import Score from "./../Score/Score";
import Reply from "./../Reply/Reply";
import User from "./../User/User";
import useMediaQuery from "../useMediaQuery";

export function Comment(props) {
  const isMobile = useMediaQuery("(max-width: 500px)");

  return (
    <div className={styles.bubble}>
      <Score
        className={styles.score}
        score={props.score}
        horizontal={isMobile}
      ></Score>
      <User username={props.username} src={props.src}></User>
      <div className={styles.text}>{props.text}</div>
      <Reply className={styles.reply}></Reply>
    </div>
  );
}
