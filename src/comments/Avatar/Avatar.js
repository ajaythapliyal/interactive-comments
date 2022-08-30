import styles from "./Avatar.module.css";
import { SIZE } from "../constants";

export default function Avatar(props) {
  return (
    <img
      src={props.src}
      className={props.size === SIZE.LARGE ? styles.large : styles.small}
      alt="user"
    ></img>
  );
}
