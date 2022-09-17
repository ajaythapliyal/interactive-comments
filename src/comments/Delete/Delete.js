import { ReactComponent as DeleteSVG } from "./../../assets/images/icon-delete.svg";
import styles from "./Delete.module.css";

export default function Delete(props) {
  return (
    <div>
      <DeleteSVG></DeleteSVG>
      <span className={styles.title}>Delete</span>
    </div>
  );
}
