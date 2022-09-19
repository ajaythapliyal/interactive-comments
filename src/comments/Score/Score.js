import styles from "./Score.module.css";
import { ReactComponent as Minus } from "./../../assets/images/icon-minus.svg";
import { ReactComponent as Plus } from "./../../assets/images/icon-plus.svg";

export default function Score(props) {
  return (
    <div className={`${styles["score-container"]} ${props.className}`}>
      <Plus onClick={props.increment} className={styles["score-action"]}></Plus>
      <p className={styles.score}>{props.score}</p>
      <Minus
        onClick={props.decrement}
        className={styles["score-action"]}
      ></Minus>
    </div>
  );
}
