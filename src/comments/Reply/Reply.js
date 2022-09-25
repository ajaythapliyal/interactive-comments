import { ReactComponent as ReplySVG } from "./../../assets/images/icon-reply.svg";
import styles from "./Reply.module.css";

export default function Reply(props) {
  return (
    <div className={props.className ? props.className : ""}>
      <ReplySVG></ReplySVG>
      <span className={styles.title}>Reply</span>
    </div>
  );
}
