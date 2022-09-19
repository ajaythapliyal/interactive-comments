import styles from "./App.module.css";
import { Comment } from "./comments/Comment/Comment";
import data from "../src/mocks/data.json";

function App() {
  return (
    <div className={styles["app-container"]}>
      <div></div>
      <main className={styles["main-container"]}>
        <Comment
          score={data.comments[0].score}
          username={data.comments[0].user.username}
          src={data.comments[0].user.image.png}
        ></Comment>
      </main>
      <div></div>
    </div>
  );
}

export default App;
