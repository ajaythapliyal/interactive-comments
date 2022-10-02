import { ReactComponent as ReplySVG } from "./../../assets/images/icon-reply.svg";
import styles from "./Reply.module.css";

export default function Reply({ className, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${styles.container} ${className} ? ${className} : ""`}
    >
      <ReplySVG></ReplySVG>
      <span className={styles.title}>Reply</span>
    </div>
  );
}
