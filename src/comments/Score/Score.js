import styles from "./Score.module.css";
import { ReactComponent as Minus } from "./../../assets/images/icon-minus.svg";
import { ReactComponent as Plus } from "./../../assets/images/icon-plus.svg";

export default function Score(props) {
  return (
    <span
      className={`${styles["score-container"]} ${
        props.className ? props.className : ""
      } ${
        props.horizontal
          ? styles["horizontal-container"]
          : styles["vertical-container"]
      }`}
    >
      <Plus onClick={props.increment} className={styles["score-action"]}></Plus>
      <span
        className={`${styles.score} ${
          props.horizontal
            ? styles["horizontal-score"]
            : styles["vertical-score"]
        }`}
      >
        {props.score}
      </span>
      <Minus
        onClick={props.decrement}
        className={styles["score-action"]}
      ></Minus>
    </span>
  );
}
