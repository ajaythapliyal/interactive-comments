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
      <div className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <Reply className={styles.reply}></Reply>
    </div>
  );
}
